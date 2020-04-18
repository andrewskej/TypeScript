import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//this interface will work as a 'checker' to avoid runtime error a dev makes
//interface is a new Type..right?
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo; //use this interface to find errors even before running the code.
    const {id, title, completed} = todo;

    logTodo(id, title, completed)
})

const logTodo = (id:number, title:string, completed:boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of : ${title}
        finished: ${completed}
    `)
}