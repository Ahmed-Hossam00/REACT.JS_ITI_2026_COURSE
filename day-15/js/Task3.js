"use strict";
const storageKey = "products";

const form = document.querySelector("#productForm");
const nameInput = document.querySelector("#productName");
const priceInput = document.querySelector("#productPrice");
const categoryInput = document.querySelector("#productCategory");
const descriptionInput = document.querySelector("#productDescription");
const imageInput = document.querySelector("#productImage");
const submitButton = document.querySelector("#productSubmit");
const searchInput = document.querySelector("#productSearch");
const productGrid = document.querySelector("#productGrid");

let products = JSON.parse(localStorage.getItem(storageKey)) || [];
let editingIndex = -1;
let searchTerm = "";

function displayProducts() {
  const matchingProducts = products
    .map((product, index) => ({ product, index }))
    .filter((item) => {
      return (
        item.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.product.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });

  productGrid.innerHTML = matchingProducts
    .map(({ product, index }) => {
      let image = product.image
        ? `<img class="card-img-top product-card-image" src="${product.image}" alt="${product.name}">`
        : `<div class="product-card-placeholder">No image</div>`;

      return `
      <div class="col-12 col-sm-6 col-lg-3">
        <article class="card product-card h-100">
          ${image}

          <div class="card-body d-flex flex-column">
            <h2 class="card-title h5">${product.name}</h2>
            <p class="product-card-category mb-2">${product.category}</p>
            <p class="card-text product-card-description">${product.description}</p>
            <p class="product-card-price mb-3">$${product.price}</p>

            <div class="product-actions mt-auto">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                data-action="edit"
                data-index="${index}">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                data-action="delete"
                data-index="${index}">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    `;
    })
    .join("");
}

function saveProducts() {
  localStorage.setItem(storageKey, JSON.stringify(products));
}

function resetForm() {
  form.reset();
  editingIndex = -1;
  submitButton.textContent = "Add Product";
}

function saveProduct(image) {
  const product = {
    name: nameInput.value.trim(),
    price: priceInput.value,
    category: categoryInput.value.trim(),
    description: descriptionInput.value.trim(),
    image: image,
  };

  if (editingIndex === -1) {
    products.push(product);
  } else {
    products[editingIndex] = product;
  }

  saveProducts();
  resetForm();
  displayProducts();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let image = editingIndex === -1 ? "" : products[editingIndex].image;
  let file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      saveProduct(reader.result);
    };

    reader.onerror = () => {
      alert("Could not read the selected image.");
    };

    reader.readAsDataURL(file);
  } else {
    saveProduct(image);
  }
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }
  const index = Number(button.dataset.index);

  if (button.dataset.action === "delete") {
    products.splice(index, 1);
    saveProducts();
    displayProducts();
  } else {
    const product = products[index];

    nameInput.value = product.name;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    descriptionInput.value = product.description;

    editingIndex = index;
    submitButton.textContent = "Update Product";
    nameInput.focus();
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    searchTerm = searchInput.value.trim();
    displayProducts();
  }
});

displayProducts();
