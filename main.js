let todos = ["Programar"];

let input = prompt("Que quieres hacer?");

while(input !== "quit"){
    if(input === "list"){
        todos.forEach(function(todo, i){
            console.log("*****")
            console.log(i + ": " + todo);
        });
    } else if(input === "new"){
    let newTodo = prompt ("escribe nueva tarea");
    todos.push(newTodo);
    }
    input = prompt("Que quieres hacer?");
    console.log("sale, ya saliste de la app");
}