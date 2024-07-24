let todoInput = document.getElementById("input");
let addBtn = document.getElementById("addbtn");
let todoItems = document.getElementById("list")

let todoArray = [];
let todoArrayStr;

document.addEventListener("DOMContentLoaded", function() {
    todoArrayStr = localStorage.getItem("todolist");
    todoArray = JSON.parse(todoArrayStr);
    if (todoArray == null) {
        todoArray = [];
    }
    
    todoArray.forEach(todo => {
        let inputli = document.createElement("li");
        inputli.innerText = todo;

        let deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerText = "Remove";
        deletebtn.style.backgroundColor = "red";
        deletebtn.addEventListener("click", function() {
            inputli.remove();
            
        });
        inputli.append(deletebtn);
        todoItems.append(inputli);
    });
})

addBtn.addEventListener("click", function() {
    if (todoInput.value == "") {
        let error = document.getElementById("inputnull");
        error.style.display = "flex";
        return;
    }

    let inputli = document.createElement("li");
    inputli.innerText = todoInput.value;

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerText = "Remove";
    deletebtn.style.backgroundColor = "red";
    deletebtn.addEventListener("click", function() {
        inputli.remove();
    });
    inputli.append(deletebtn);
    todoItems.append(inputli);

    todoArray.push(todoInput.value);
    todoArrayStr = JSON.stringify(todoArray);
    localStorage.setItem("todolist", todoArrayStr)
    
    todoInput.value = "";
    console.log("added");
});


