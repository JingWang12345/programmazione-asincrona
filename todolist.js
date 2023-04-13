class Todolist {

    constructor(title, todoArray = []) {
        this.title = title;
        this.todoArray = todoArray;
    }

    addTodo(todo) {
        this.todoArray.push(todo);
    }

    removeTodo(todo) {
           this.todoArray = this.todoArray.filter((element) => element !== todo);
    }

    sortByTitle() {
        return this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2));
    }

    sortByCreationDate() {
        return this.todoArray.sort((todo1, todo2) => todo1.compareByCreationDate(todo2));
    }

    completeTodo(todo) {
       todo.isCompleted=true;
    }

    static fromObjectArray(title, objectArray) {
        const newTodoList = new Todolist(title);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObject = objectArray[i];
            const newTodo = Todo.fromTodoObject(todoObject);
            newTodoList.addTodo(newTodo);
        }
        return newTodoList;
    }

}