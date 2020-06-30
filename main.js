const form = document.getElementById("task-form");
const ulCollection = document.querySelector(".collection");
const filter = document.getElementById("filter");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.getElementById("task");

//Load all events Listeners
loadAllEventsListeners();

//Call all the events
function loadAllEventsListeners(){
  //add task
  form.addEventListener("submit", addTask);
  //remove li from ul
  ulCollection.addEventListener("click", removeFromLi);
  //clear all
  clearBtn.addEventListener("click", clearAll);
  //filter through li
  filter.addEventListener("keyup", filterUp);
}

//Add the task to the ul
function addTask(e){
  if(taskInput.value === ""){
    alert("Please Enter a Task");
  }else{
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement("a");
    link.className = "delete-item";
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    
    li.appendChild(link);

    ulCollection.appendChild(li);

    e.preventDefault();
    taskInput.value = "";
  }
}

//Remove li from ul
function removeFromLi(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure you want to delete the task?")){
      e.target.parentElement.parentElement.remove();
    }
  }
}

//clear all
function clearAll(){
  // ulCollection.innerHTML = "";
    if(confirm("Are you sure you want to delete all?")){
      while(ulCollection.firstChild){
        ulCollection.removeChild(ulCollection.firstChild);
      }
  }
}

function filterUp(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task){
    const item = task.firstChild.textContent; 
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = "block";
    }else{
      task.style.display = "none";

    }
  })
}