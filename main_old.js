// // console.log('async');


// // setTimeout(togliLaLasagna, 3000)


// // function togliLaLasagna(){
// //     console.log('le lasagne sono pronte!!!')
// // }



// // setTimeout(buttaLaSpazzatura, 10000)

// // function buttaLaSpazzatura(){
// //     console.log('ho fatto la differenziata!!!')
// // }


// // setTimeout(salutaLaNonna, 5000)


// // function salutaLaNonna(){
// //     document.getElementById('main').innerHTML = '<h1>Ciao Nonna</h1>'
// // }


// // function salutaJing(){
// //     console.log("ciao Jing!!!");
// // }


// // setInterval(salutaJing, 2000);


// // fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
// // .then(resp => resp.json())
// // .then(data => displayData(data));

// function displayData(data) {
//     const todoList = document.getElementById('todo-list');
//     todoList.innerHTML = '';

//     for (let i = 0; i < data.length; i++) {
//         const todo = data[i];

//         const newLi = document.createElement('li');

//         const titleNode = document.createTextNode(todo.title);

//         newLi.appendChild(titleNode);

//         todoList.appendChild(newLi);

//     }
// }



// const xhr = new XMLHttpRequest();


// const url = 'https://643672ab8205915d34f3b508.mockapi.io/todos';

// xhr.open("GET", url, true);

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }

// xhr.send();