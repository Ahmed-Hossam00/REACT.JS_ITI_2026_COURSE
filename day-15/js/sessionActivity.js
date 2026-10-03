"use strict";

const postsContainer = document.getElementById("postsContainer");

async function displayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postsData = await response.json();
    postsData.forEach((post) => {
      createAndAppendPost(post);
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
}
function createAndAppendPost(post) {
  postsContainer.innerHTML += `
    <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <span>Post ID: ${post.id}</span>
    </div>
    `;
}

displayPosts();
