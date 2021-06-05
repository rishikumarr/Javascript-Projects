const switchTabs = document.querySelector('.tabs'); 
const switchContent = document.querySelector('.bottom');
const markAsCompleted = document.querySelectorAll('.task');

const taskForm = document.querySelector('[data-task-form]');
const LOCAL_STORAGE_TASKS_KEY = 'tasks.todo'; 
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];

const taskToDoTemplate = document.getElementById('taskstodo');
const completedTasksTemplate = document.getElementById('completed');

taskTabActive();

switchTabs.addEventListener('click',function(){
    switchTabs.classList.toggle('active') ? taskTabActive() : completedTabActive();
    switchContent.classList.toggle('hidden');
});

taskForm.addEventListener('submit',function(e){
    e.preventDefault();

    const userInput = taskForm.querySelector('[data-task-input]'); 
    if(userInput.value.trim() !=''){
        const trimmedvalue = userInput.value.trim();
        const newTask = createTaskObj(trimmedvalue);
        tasks.push(newTask);
        taskForm.querySelector('[data-task-input]').value ="";
        saveToLocal();
        clearElement(document.querySelector('.tasks'));
        renderTodo();
        renderTodoCount();
    }
});

taskForm.querySelector('[data-task-input]').addEventListener('click',function(){
    switchTabs.classList.add('active');
    switchContent.classList.remove('hidden');
});

document.querySelector('.tasks').addEventListener('click',function(e){
    const clicked = e.target;
    if (clicked.tagName.toLowerCase()=='div'){
        const id =clicked.getAttribute('data-task-id');
        mark(id);
        moveToCompleted(id);
    }
    if(clicked.tagName.toLowerCase()==='p'){
        const id =clicked.getAttribute('id');
        mark(id);
        moveToCompleted(id);
    }
});

document.querySelector('.completedtasks').addEventListener('click',function(e){
    const clicked = e.target;

    if(clicked.tagName.toLowerCase()==='div'){
        const id = clicked.getAttribute('data-completed-id');
        deleteTask(id);
    }
    if(clicked.tagName.toLowerCase()==='p'){
        const id = clicked.getAttribute('id');
        deleteTask(id);
    }
    if(clicked.tagName.toLowerCase()==='button'){
        const id = clicked.getAttribute('id');
        deleteTask(id);
    }
})

function mark(id){
    document.getElementById(id).classList.toggle('clicked');
}

function moveToCompleted(id){
    tasks.forEach(task=>{
        if(task.id === id){
            task.completed = true;
            saveToLocal();
            setTimeout(function(){taskTabActive()}, 1000);
        }
    });
}

function deleteTask(id){
    tasks.forEach((task,i)=>{
        if(task.id === id){
            tasks.splice(i,1);
            saveToLocal();
            setTimeout(function(){completedTabActive()},500);
            renderTodoCount();
        }
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

function renderTodo(){
    tasks.forEach((task) =>{
        if(task.completed === false){
            const perTask = document.importNode(taskToDoTemplate.content,true);
            perTask.querySelector('.task').setAttribute('data-task-id',task.id);
            perTask.querySelector('.taskslabel').innerText = task.task;
            perTask.querySelector('.taskslabel').setAttribute('id',task.id);
            document.querySelector('.tasks').appendChild(perTask);
        }
    });
}

function renderCompleted(){
    tasks.forEach((task)=>{
        if(task.completed){
            const perTask = document.importNode(completedTasksTemplate.content,true);
            perTask.querySelector('.completedtask').setAttribute('data-completed-id',task.id);
            perTask.querySelector('.taskcompleted').setAttribute('id',task.id);
            perTask.querySelector('.taskcompleted').innerText = task.task;
            perTask.querySelector('.delete').setAttribute('id',task.id);
            document.querySelector('.completedtasks').appendChild(perTask);
        }
    });
}

function renderTodoCount(){
    const overallTasks = tasks.length;
    let completed = 0;
    for( let task of tasks){
        if(task.completed) completed+=1;
    }
    document.querySelector('.tobecompleted').innerText = overallTasks - completed;
    document.querySelector('.completed').innerText = completed;
}

function createTaskObj(newTask){
    return {
        id : Date.now().toString(),
        task : newTask,
        completed : false
    }
}

function saveToLocal(){
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY,JSON.stringify(tasks));
}

function taskTabActive(){
    const element = document.querySelector('.tasks');
    clearElement(element);
    renderTodo();
    renderTodoCount();
}

function completedTabActive(){
    const element = document.querySelector('.completedtasks');
    clearElement(element);
    renderCompleted();
}
