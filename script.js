// Selecting the necessary HTML elements
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// Function to add a new to-do item
function addTodo() {
  // Retrieve the value from the input field
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerText = todoText;

    // Create a delete button for the list item
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      // Remove the list item when the delete button is clicked
      listItem.remove();
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field after adding the to-do item
    todoInput.value = "";
  }
}

// Event listener for the add button
addButton.addEventListener("click", addTodo);

// Event listener for the Enter key
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
