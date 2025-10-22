let todos = [];

function addTask(task) {
  todos.push(task);
}

function removeTask(index) {
  // Check if the index is valid
  if (index >= 0 && index < todos.length) {
    // Remove the task at the given index
    const removedTasks = todos.splice(index, 1); // splice returns an array of removed items
    return removedTasks[0]; // return the first (and only) removed task
  } else {
    console.log("Invalid index! No task removed.");
    return null;
  }
}

// List all tasks with numbers
function listTasks() {
  for (let i = 0; i < todos.length; i++) {
    const taskNumber = i + 1; // Make it 1-based numbering
    const taskName = todos[i];
    console.log(taskNumber + ". " + taskName);
  }
}

// Testing the functions
addTask("Buy groceries");
addTask("Learn Node.js");
listTasks();
console.log("Removed:", removeTask(0));
listTasks();
