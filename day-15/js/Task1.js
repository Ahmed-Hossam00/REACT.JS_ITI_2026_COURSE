"use strict";

const recipesContainer = document.querySelector(".recepies-container");
const searchKeywordInput = document.querySelector("#recipesKeyword");
const recipesSelect = document.querySelector("#recipesSelect");

async function getRecipes(searchWord = `Pizza`) {
  try {
    let response = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes?search=${searchWord}`,
    );
    let responseData = await response.json();
    console.log(responseData.data.recipes);
    return responseData.data.recipes;
  } catch (error) {
    console.log(`An Error: ${error}`);
  }
}

function updateRecipes(recpiesContent) {
  recipesContainer.innerHTML = recpiesContent;
}

(function () {
  const recipeList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];
  let selectOptions = ``;
  for (const option of recipeList) {
    selectOptions += `
        <option value="${option}">${option}</option>
        `;
  }
  recipesSelect.innerHTML = selectOptions;
})();

function main() {
  searchandAppend();

  searchKeywordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchandAppend(searchKeywordInput.value);
    }
  });
  recipesSelect.addEventListener("change", (e) => {
    searchandAppend(recipesSelect.value);
  });
}

async function searchandAppend(searchKeyword = "Pizza") {
  const recipes = await getRecipes(searchKeyword);
  const recipeHtmlArray = recipes.map((recipe) => {
    return `
    <div class="recipe col-md-4 col-lg-3 col-sm-6 mb-4">
          <div class="card h-100  border-0 bg-transparent">
            <img src="${recipe.image_url}" alt="${recipe.title}" class="card-img-top recipe-image" />
            <div class="card-body text-center">
              <h3 class="card-title text-white">${recipe.publisher}</h3>
              <p class="card-text text-white">${recipe.title}</p>
            </div>
          </div>
        </div>
    `;
  });
  updateRecipes(recipeHtmlArray.join(""));
}

main();
