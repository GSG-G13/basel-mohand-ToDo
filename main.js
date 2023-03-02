const tasks = [];

// Add Button
let typeInput = document.querySelector(".type input");
let tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add");
const tasksList= document.querySelector('.box');



addBtn.addEventListener("click", _ => {
  const value = typeInput.value.trim();
  if(value) {
    tasks.push({taskName: value, isChecked: false});
    showData();
  }
});
function showData() {
  tasksContainer.innerHTML = "";
  typeInput.value = "";
  tasks.forEach(task => {
    // Create Task Container
    const li = document.createElement("li");
    li.classList.add("task");
    task.isChecked && li.classList.add("done");

    // Create Task Text Div
    const textDiv = document.createElement("div");
    textDiv.classList.add("task-name");
    const textDivValue = document.createTextNode(task.taskName);
    textDiv.appendChild(textDivValue);

    // Create Btn Container
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Create Delete Btn
    const delIcont = document.createElement("i");
    delIcont.classList.add("fa-solid", "fa-check", "check");

    // Create Check Btn
    const checkIcont = document.createElement("i");
    checkIcont.classList.add("fa-solid", "fa-x", "delete");

    btnContainer.appendChild(delIcont);
    btnContainer.appendChild(checkIcont);
    li.appendChild(textDiv);
    li.appendChild(btnContainer);
    tasksContainer.appendChild(li)
  })

}

const deletFn = function (event) {
  if(tasks.length >= 1 && event.target.classList.contains('delete')) {
    const tasksList = document.querySelectorAll('.task');
    tasks.splice(Array.from(tasksList).indexOf(event.target.closest('li')),1);
    showData();
  }
}


tasksList.addEventListener('click', deletFn)