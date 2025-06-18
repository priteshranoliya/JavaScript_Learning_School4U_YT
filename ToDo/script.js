let container = document.querySelector(".container");
let inputTodo = document.querySelector(".inputTodo");
let btnTodo = document.querySelector(".btnTodo");
let deleteTodo = document.querySelector(".deleteTodo");
let paraTodo = document.querySelector(".paraTodo");
let todoItems = document.querySelector(".todoItems");

let todoArr = [];
let todoText = "";

function handleDelete(id) {
  const updatedTodos = todoArr.filter((item) => item.id !== id);
  todoArr = updatedTodos;
  todoItems.innerHTML = "";
  if (todoArr.length === 0) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
                  <div class="liDelete">
                    <p class="paraTodo">No To-Do's are there! Please Add It!</p>
                  </div>
            `;
    
    todoItems.append(newDiv);
  } else {
    todoArr.map((item) => {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `
                  <div class="liDelete">
                    <p class="paraTodo">${item.todo}</p>
                    <button class="deleteTodo" onclick="handleDelete(${item.id})">Delete</button>
                  </div>
            `;
      todoItems.append(newDiv);
    });
  }
}

function addTodo(todo) {
  const newTodo = { id: todoArr.length + 1, todo };
  todoArr.push(newTodo);
  let newDiv = document.createElement("div");

  if(todoArr.length === 1){
    todoItems.innerHTML = "";
  }

  newDiv.innerHTML = `
          <div class="liDelete">
            <p class="paraTodo">${newTodo.todo}</p>
            <button class="deleteTodo" onclick="handleDelete(${newTodo.id})">Delete</button>
          </div>
    `;
  todoItems.append(newDiv);
}

function handleChange(e) {
  todoText = e.target.value;
}

inputTodo.addEventListener("input", handleChange);

btnTodo.addEventListener("click", () => {
  addTodo(todoText);
});
