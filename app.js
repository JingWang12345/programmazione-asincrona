let superList = new Todolist('lista super figa');

displayTodos();

DataService.getTodos().then(data => {
    fillTodoArrayFromServer(data);
    displayTodos();
})

function fillTodoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate, object.isCompleted, object.id);
        superList.addTodo(todo)
    }
}


function displayTodos() {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');



    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);
    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        // if(todo.isCompleted){
        //     newLi.style.borderColor="green";
        //     newLi.style.borderWidth="8px";
        // }
        if (todo.isCompleted) {
            newLi.classList.add('completed')
        }
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');


        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);


        const completeBtn = document.createElement('button');
        const completeNode = document.createTextNode('completato');
        completeBtn.appendChild(completeNode);
        completeBtn.addEventListener('click', (event) => {
            superList.completeTodo(todo);
            DataService.putTodo(todo).then(updateTodo =>{
                displayTodos();
            })
          
        });

        const deleteBtn = document.createElement('button');
        const deleteNode = document.createTextNode('elimina');
        deleteBtn.appendChild(deleteNode);
        deleteBtn.addEventListener('click', (event) => {
            DataService.deleteTodo(todo).then(removedtodo => {
                superList.removeTodo(todo);
                displayTodos();
            })
          
        });

        newLi.appendChild(completeBtn);
        newLi.appendChild(deleteBtn);

        todoListUl.appendChild(newLi);

    }
}


// function createDeleteBtn(todo){
//     const deleteBtn = document.createElement('button');
//     const deleteNode = document.createTextNode('elimina');
//     deleteBtn.appendChild(deleteNode);
//     deleteBtn.addEventListener('click', (event)=> {
//         superList.removeTodo(todo);
//         displayTodos();
//     });
//     return deleteBtn;
// }


function displayTodos2() {
    // template literal    
    const todoListTitle = document.getElementById('list-name');
    todoListTitle.innerHTML = superList.title;
    const todoListUl = document.getElementById('todo-list');

    todoListUl.innerHTML = ``;
    for (let i = 0; i < superList.todoArray.length; i++) {
        const element = superList.todoArray[i];
        todoListUl.innerHTML += `<li class="todo-li ${element.isCompleted ? 'completed' : ''}">
                                <span class="todo-title">${element.title}</span>
                                <span class="todo-date">${element.creationDate}</span>
                                <button id="complete-btn${i}">Complete</button>
                                <button id="delete-btn${i}">Delete</button>
                             </li>`

    }
    for (let i = 0; i < superList.todoArray.length; i++) {
        const element = superList.todoArray[i];
        const completeButton = document.getElementById(`complete-btn${i}`);
        const deleteButton = document.getElementById(`delete-btn${i}`);

        completeButton.addEventListener('click', (event) => {
            superList.completeTodo(element);
            displayTodos2();
        });

        deleteButton.addEventListener('click', (event) => {
            superList.removeTodo(element);
            displayTodos2();
        });

    }
}


function displayTodos3() {
    displayTitle();
    const todoListUl = document.getElementById('todo-list');



    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        // if(todo.isCompleted){
        //     newLi.style.borderColor="green";
        //     newLi.style.borderWidth="8px";
        // }
        if (todo.isCompleted) {
            newLi.classList.add('completed')
        }


        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');


        const dateNode = document.createTextNode(todo.creationDate);


        dateSpan.appendChild(dateNode);

        newLi.appendChild(createTodoTitleSpan(todo));
        newLi.appendChild(dateSpan);


        const completeBtn = document.createElement('button');
        const completeNode = document.createTextNode('completato');
        completeBtn.appendChild(completeNode);
        completeBtn.addEventListener('click', (event) => {
            superList.completeTodo(todo)
            displayTodos();
        });

        const deleteBtn = document.createElement('button');
        const deleteNode = document.createTextNode('elimina');
        deleteBtn.appendChild(deleteNode);
        deleteBtn.addEventListener('click', (event) => {
            superList.removeTodo(todo);
            displayTodos();
        });

        newLi.appendChild(completeBtn);
        newLi.appendChild(deleteBtn);

        todoListUl.appendChild(newLi);

    }
}
function displayTitle() {
    const todoListTitle = document.getElementById('list-name');
    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);
}

function createTodoTitle() {
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('todo-title')
    const titleNode = document.createTextNode(todo.title);
    titleSpan.appendChild(titleNode);
    return titleSpan;
}

function createTodoDateSpan(todo) {
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('todo-date');
    const dateNode = document.createTextNode(todo.creationDate);
    dateSpan.appendChild(dateNode);
    return dateSpan;
}

function createCompleteButton(todo) {
    const completeBtn = document.createElement('button');
    const completeNode = document.createTextNode('completato');
    deleteBtn.appendChild(deleteNode);
    deleteBtn.addEventListener('click', (event) => {
        superList.removeTodo(todo);
        displayTodos3();
    });
    return completeBtn;
}

function createDeleteButton(todo) {


    const completeBtn = document.createElement('button');
    const completeNode = document.createTextNode('elimina');
    deleteBtn.appendChild(deleteNode);
    deleteBtn.addEventListener('click', (event) => {
        superList.removeTodo(todo);
        displayTodos3();
    });
    return completeBtn;
}


function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
}

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
}