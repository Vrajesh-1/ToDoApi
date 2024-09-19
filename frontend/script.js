const apiUrl = 'http://localhost:5159/api/todo'; // Ensure this matches your API endpoint

document.getElementById('addTodoBtn').addEventListener('click', addTodo);
loadTodos();

async function loadTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.name;
        li.innerHTML += `<button onclick="deleteTodo(${todo.id})">Delete</button>`;
        todoList.appendChild(li);
    });
}

async function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const newTodo = { name: todoInput.value, isCompleted: false };

    if (!newTodo.name) {
        alert("Please enter a task.");
        return;
    }

    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    });

    todoInput.value = '';
    loadTodos();
}

async function deleteTodo(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    loadTodos();
}
