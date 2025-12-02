const taskInput = document.getElementById("taskInput");
const btn = document.getElementById("btn");
const tasklist = document.getElementById("tasklist");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    message.textContent = "Please enter your task!";
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");

  li.appendChild(span);
  li.appendChild(delBtn);
  tasklist.appendChild(li);

  taskInput.value = "";
  message.textContent = "Task added successfully!";

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  delBtn.addEventListener("click", () => {
    li.remove();
    message.textContent = "Task removed!";
  });
});
