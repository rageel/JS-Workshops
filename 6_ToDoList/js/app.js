document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.querySelector("#taskInput");
    var addTaskButton = document.querySelector("#addTaskButton");
    var taskList = document.querySelector("#taskList");
    var removeFinishedTasksButton = document.querySelector(
        "#removeFinishedTasksButton"
    );

    var body = document.querySelector("body");
    var counterNum = 0;
    var counter = document.createElement("h2");
    counter.innerText = counterNum;
    body.insertBefore(counter, taskList);

    //robimy funkcje, ma robić, żeby counter byl zawsze poprawny
    //wołamy przy każdym guzikiem
    function updateCounter() {
        var lis = document.querySelectorAll("li");
        counterNum = 0;

        for (var i = 0; i < lis.length; i++) {
            if (!lis[i].completed) {
                counterNum++;
            }
        }
        counter.innerText = counterNum;
    }

    //konczymy funkcje

    addTaskButton.addEventListener("click", function() {
        if (taskInput.value.length <= 5 || taskInput.value.length >= 100) {
            alert("Zadanie ma mniej niż 6 znaków lub więcej niż 100.");
            return;
        }

        var li = document.createElement("li");
        var h1 = document.createElement("h1");

        h1.innerText = taskInput.value;
        var btnComplete = document.createElement("button");
        btnComplete.innerText = "Complete";
        var btnDelete = document.createElement("button");
        btnDelete.innerText = "Delete";
        taskInput.value = "";

        li.completed = false;
        li.appendChild(h1);
        li.appendChild(btnComplete);
        li.appendChild(btnDelete);
        taskList.appendChild(li);

        updateCounter();

        btnComplete.addEventListener("click", function() {
            //if (!this.parentElement.completed) {
            console.log(this.previousElementSibling);

            if (this.parentElement.completed) {
                this.parentElement.completed = false;
                this.previousElementSibling.style.color = "black";
            } else {
                this.previousElementSibling.style.color = "red";
                this.parentElement.completed = true;
            }
            updateCounter();
        });

        btnDelete.addEventListener("click", function() {
            this.parentElement.parentElement.removeChild(this.parentElement);
            updateCounter();
        });

        removeFinishedTasksButton.addEventListener("click", function() {
            var lis = document.querySelectorAll("li");

            for (var i = 0; i < lis.length; i++) {
                if (lis[i].querySelector("h1").style.color === "red") {
                    lis[i].parentElement.removeChild(lis[i]);
                }
            }
            updateCounter();
        });
    });
});
