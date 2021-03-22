const tasksList = document.getElementById("tasks-list");
const addTask = document.getElementById("add-task");
const taskValue = document.getElementById("task-value");
const task = document.getElementById("task");

const analysisDoing = document.getElementById("analysis-doing");
const analysisDone = document.getElementById("analysis-done");
const developmentDoing = document.getElementById("development-doing");
const developmentDone = document.getElementById("development-done");
const testingDoing = document.getElementById("testing-doing");
const testingDone = document.getElementById("testing-done");
const doneLists = document.getElementById("done-lists");




const renderPosts = async () => {

    let uri = 'http://localhost:3000/tasks';

    const res = await fetch(uri);
    const tasks = await res.json();
    let html ='';

    //Method:Get
    tasks.forEach(task => {

        if (task.cloumnLocation === "To-do") {

            tasksList.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
            <div id="content-task">${task.taskName}</div>
            <div class="flex justify-between">
                <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
            </div>
             
            </li>`;
        }

        else if (task.cloumnLocation === "Analysis") {
            if (task.DoingOrDone == "Doing") {


                analysisDoing.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
                <div id="content-task">${task.taskName}</div>
                <div class="flex justify-between">
                    <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                    <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
                </div>
                 
            </li>`;
            } else if (task.DoingOrDone === "done") {


                analysisDone.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
                <div id="content-task">${task.taskName}</div>
                <div class="flex justify-between">
                    <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                    <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
                </div>
                 
            </li>`;
            }
        } else if (task.cloumnLocation === "Development") {
            if (task.DoingOrDone == "Doing") {

                developmentDoing.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
                <div id="content-task">${task.taskName}</div>
                <div class="flex justify-between">
                    <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                    <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
                </div>
                 
            </li>`;

            } else if (task.DoingOrDone === "done") {
                developmentDone.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
                <div id="content-task">${task.taskName}</div>
                <div class="flex justify-between">
                    <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                    <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
                </div>
                 
            </li>`;
            }
        } else if (task.cloumnLocation === "Testing") {
            if (task.DoingOrDone == "Doing") {

            testingDoing.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
            <div id="content-task">${task.taskName}</div>
            <div class="flex justify-between">
                <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
            </div>
             
        </li>`;

            } else if (task.DoingOrDone === "done") {
                testingDone.innerHTML += `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
                <div id="content-task">${task.taskName}</div>
                <div class="flex justify-between">
                    <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                    <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
                </div>
                 
            </li>`;
            }
        } else if (task.cloumnLocation === "Done") {
            doneLists.innerHTML +=
            `<li id="task" class="p-2 m-2 box-border list-none border-2 border-solid border-blue-300 rounded hover:border-blue-600 border-2 border-solid inline-block break-all" draggable="true">
            <div id="content-task">${task.taskName}</div>
            <div class="flex justify-between">
                <a href="#" class="hover:text-blue-600" id="edit-task">Edit</a>
                <a href="#" class="hover:text-red-600" id="delete-task">Delete</a>
            </div>
             
        </li>`;

        }

    })

}

const createTask = async (e)=>{
    //Method:Post
    e.preventDefault();

    const doc = {
        taskName:taskValue.value,
        cloumnLocation:'To-do'
    }

    await fetch('http://localhost:3000/tasks',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{'content-type':'application/json'}
    });

    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

addTask.addEventListener("click",createTask);

// DRAG & DROP

let taskfill;

const dragStart = (event) => {
    
    event.target.className += ' hold';
    taskfill = event.target;
    setTimeout(() => (event.target.className = 'invisible'), 0);
}

const dragEnd = (event) => {    
    
    event.target.className = 'task';
}

const dropzones = document.querySelectorAll('.dropzone');

const dragEnter = (event) => {
    
    event.preventDefault();
    if(event.target.className === "column dropzone") {
        event.target.className += ' hovered';   
    }
}

const dragOver = (event) => {

    event.preventDefault();
}

const dragLeave = (event) => {
    
    if(event.target.className === "column dropzone hovered") {
        event.target.className = "column dropzone";
    }
}

const dragDrop = (event) => {
    
    if(event.target.className === "column dropzone hovered") {
        event.target.className = "column dropzone";
    }
    event.target.append(taskfill);
}

for(const dropzone of dropzones) {
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
}

window.addEventListener('DOMContentLoaded',() => renderPosts());