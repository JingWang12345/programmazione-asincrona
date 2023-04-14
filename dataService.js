class DataService {

    // static getTodos(callback) {
    //     fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://6436ba0b3e4d2b4a12da1343.mockapi.io/todo')
            .then(resp => resp.json())
    }


    // static postTodo(todo){

    // }

    static putTodo(todo){
        const jsonTodo = JSON.stringify(todo.toDbModel());
        return fetch('https://6436ba0b3e4d2b4a12da1343.mockapi.io/todo/' + todo.id, {method: 'PUT', body: jsonTodo, headers:{'content-type':'application/json'}})
        .then(resp => resp.json());

    }

    static deleteTodo(todo) {
        return fetch('https://6436ba0b3e4d2b4a12da1343.mockapi.io/todo/' + todo.id, {method: 'DELETE'})
        .then(resp => resp.json())
    }


}