const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-tasks')

let myTaskList = []

// Add New Task

function addNewTask(){    

    myTaskList.push({
        task: input.value,
        complete: false
    })

    input.value = ''

    showTasks()
}

// Show Tasks

function showTasks(){
    let newLi = ''
    
    myTaskList.forEach( (item, position) => {

        newLi = newLi + `
            <li class="task ${item.complete && "done"}">
                <img src="./src/img/checked.png" alt="check-on-task" onclick="completeTask(${position})">
                <p>${item.task}</p>
                <img src="./src/img/trash.png" alt="task-to-trash" onclick="deleteTask(${position})">
            </li>
            `
    } )

    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myTaskList))
}

// Complete tasks

function completeTask(position){

    myTaskList[position].complete = !myTaskList[position].complete

    showTasks()
}

// Delete Tasks

function deleteTask(position){

    myTaskList.splice(position, 1)

    showTasks()
}

// Reload page and tasks, saving previous tasks and accessing it 

function reloadTasks(){

    const localStorageTasks = localStorage.getItem('list')

    if (localStorageTasks) {
        myTaskList = JSON.parse(localStorageTasks)
    }

    showTasks()
}

reloadTasks()

button.addEventListener('click', addNewTask)