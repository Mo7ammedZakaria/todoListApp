class Store {
    //get tasks
    static getTask() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
            // console.log(list);
        }
        return tasks;
    }
    // add task
    static addTask(task) {
        const tasks = Store.getTask();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //move task 
    static removeTask(text, newStatus) {
        const tasks = Store.getTask();
        if (newStatus != "delete") {
            tasks.forEach((task, index) => {
                if (task.text === text) {
                    task.status = newStatus;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            tasks.forEach((task, index) => {
                if (task.text === text) {
                    tasks.splice(index, 1);
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        // document.querySelector("#slots-containers").load(window.location.href + " #slots-containers");
        // UI.displayTasks();
        window.location = window.location.href;        
    }
}