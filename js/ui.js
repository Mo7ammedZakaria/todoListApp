class UI {

    static displayTasks() { // display tasks

        const TasksList = Store.getTask();
        // TasksList.sort((a,b) => a.index - b.index);
        const list = TasksList;
        list.forEach(task => {
            UI.addTaskToList(task);
        });
    }

    static addTaskToList(comingTask) { // add tasks to list in table

        const todo = document.querySelector('#todo');
        const inProgress = document.querySelector('#inProgress');
        const done = document.querySelector('#done');

        const li = document.createElement('li');

        if (comingTask.status === "todo") {
            li.classList.add(`forDoing`);
            li.innerHTML = `${comingTask.text}`;
            todo.appendChild(li);
        } else if (comingTask.status === "inProgress") {
            li.classList.add(`inProgressStatus`);
            li.innerHTML = `${comingTask.text}`;
            inProgress.appendChild(li);
        } else {
            li.classList.add(`doneStatus`);
            li.innerHTML = `${comingTask.text}`;
            done.appendChild(li);
        }

        this.dir(li);
    }

    static dir(li) {
        if (li.innerHTML.includes('ا') || li.innerHTML.includes('أ') || li.innerHTML.includes('ي') || li.innerHTML.includes('و') || li.innerHTML.includes('ب')) {
            li.style.direction = "rtl";
            li.style.textAlign = "right";
        }
    }
}