const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", function(event) {
        const li = event.target.parentElement;
        li.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos();
    });
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTodo = {
        text: toDoInput.value,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
});

const savedToDos = localStorage.getItem("TODOS_KEY");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(todo => paintToDo(todo));
}