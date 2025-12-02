// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// ✅ Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    message.textContent = "⚠️ Please enter a task!";
    return;
  }

  // Create new <li>
  const li = document.createElement("li");

  // Create <span> for text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Create Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");

  // Append span & button to <li>
  li.appendChild(span);
  li.appendChild(delBtn);

  // Add li to the taskList
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  message.textContent = "✅ Task added successfully!";

  // Event: mark as completed
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Event: delete task
  delBtn.addEventListener("click", () => {
    li.remove();
    message.textContent = "🗑️ Task removed!";
  });
})
