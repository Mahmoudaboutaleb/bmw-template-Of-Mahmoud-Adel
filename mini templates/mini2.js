let text = document.querySelector('.text');
let sub = document.querySelector('.sub');
let tasks = document.querySelector('.tasks');
let arrayOfTask = [];

if (localStorage.getItem('tasks')) {
    arrayOfTask = JSON.parse(localStorage.getItem('tasks'))
}
getItemsFromLocalStorege();

sub.onclick = function () {
    if (text.value !== "") {
        AddTaskToArray(text.value);
        text.value = ""
    }
}

function AddTaskToArray(taskTest) {
    const task = {
        id: Date.now(),
        title: taskTest,
        completed: false,
    };
    arrayOfTask.push(task)
    addElementToPage(arrayOfTask);
    addElementToLocalStorege(arrayOfTask);
}
function addElementToPage(arrayOfTask) {
    tasks.innerHTML = "";
    arrayOfTask.forEach((task) => {
        let div = document.createElement('div');
        div.className = 'task';
        div.setAttribute('data-id', task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement('span');
        span.className = 'del'
        span.appendChild(document.createTextNode('Delete'))
        div.appendChild(span)
        tasks.appendChild(div)
    })
}
function addElementToLocalStorege(arrayOfTask) {
    window.localStorage.setItem('tasks', JSON.stringify(arrayOfTask));
}
function getItemsFromLocalStorege() {
    let getItems = localStorage.getItem('tasks')
    if (getItems) {
    let JSONItems  = JSON.parse(getItems)
    addElementToPage(JSONItems)
    }
}
