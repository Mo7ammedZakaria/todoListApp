
document.addEventListener("DOMContentLoaded", function () {
    UI.displayTasks();
    moveToProgress();
    moveToDone();
    Delete();
});


function clearInput() {
    document.querySelector('#task-input').value = '';
}

document.querySelector("#add").addEventListener("click", function (e) {
    const newTask = document.querySelector('#task-input').value;
    const status = 'todo';
    const task = new Task(newTask, status);

    if (newTask) {
        UI.addTaskToList(task);
        Store.addTask(task);
        clearInput();
    }
});

function moveToProgress() {
    var item = document.getElementsByClassName("forDoing");
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("dblclick", function (e) {
            // console.log('hello');
            Store.removeTask(e.target.innerHTML, "inProgress");
        });
    }
}

function moveToDone() {
    var item = document.getElementsByClassName("inProgressStatus");
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("dblclick", function (e) {
            Store.removeTask(e.target.innerHTML, "done");
        });
    }
}

function Delete() {
    var item = document.getElementsByClassName("doneStatus");
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("dblclick", function (e) {
            Store.removeTask(e.target.innerHTML, "delete");
        });
    }
}

// function refreshData() {
//     tasks
// }