function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
  }
  const li = document.createElement("li");
  li.innerText = taskText;
  // Create the delete button::
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  // Add Class to the delete btn
  btn.classList.add("delete-btn");
  // Add an Event Listener to the delete btn::
  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btn);

  taskList.appendChild(li);

  taskInput.value = "";
}
