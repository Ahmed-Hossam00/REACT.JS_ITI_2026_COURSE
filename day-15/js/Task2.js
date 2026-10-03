"use strict";

const containerForm = document.querySelector("#myForm");
const inputField = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

(function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const todoItem = createTodoItem(task);
    todoList.appendChild(todoItem);
  });
})();

function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInLocalStorage(taskValue, newValue) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.map((task) => {
    if (task === taskValue) {
      return newValue;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function removeTaskFromLocalStorage(taskValue) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task !== taskValue);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function createTodoItem(taskText) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `
    <div class="d-flex align-items-center justify-content-between py-2">
      <p class="mb-0 lg h6">${taskText}</p>
      <div class="d-flex align-items-center todo-actions">
        <button type="button" class="edit">
          <i class="fa-solid fa-pen edit"></i>
        </button>
        <button type="button" class="delete">
          <i class="fa-solid fa-trash-can delete"></i>
        </button>
      </div>
    </div>
  `;
  return li;
}

containerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = inputField.value.trim();
  if (taskText) {
    const todoItem = createTodoItem(taskText);
    todoList.appendChild(todoItem);
    saveToLocalStorage(taskText);
    inputField.value = "";
  }
});

todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.closest("li");
    todoList.removeChild(li);
    removeTaskFromLocalStorage(li.querySelector("p").textContent);
  }
  if (event.target.classList.contains("edit")) {
    const li = event.target.closest("li");
    const p = li.querySelector("p");
    const currentText = p.textContent;
    const newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
      p.textContent = newText.trim();
    }
    updateTaskInLocalStorage(currentText, newText.trim());
  }
});
