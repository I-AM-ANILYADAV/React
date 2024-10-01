import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList () {
    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4() ,isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {  
        if (newTodo.trim()) { // Only add non-empty tasks
            setTodos((prevTodos) => {
                return [...prevTodos, { task: newTodo, id: uuidv4() , isDone:false }];
            });
            setNewTodo(""); // Clear the input field after adding
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodoValue = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAllDone = () => {
        let newArr = todos.map((todo) => {
            return {
                ...todo,
                isDone: true // Correctly uppercasing the task
            };
        });
        setTodos(newArr); // Update the state with the transformed todos
    };

    let markAsDone = (id) =>{
        let newArr = todos.map((todo) => {
            if(todo.id == id){
            return {
                ...todo,
                isDone:true // Correctly uppercasing the task
            };
        }else {
            return todo;
        }
        });
        setTodos(newArr); 


    }

    return (
        <>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue} />&nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine :"line-through"}: {}}>{todo.task}</span>&nbsp; 
                        <button onClick={() => deleteTodoValue(todo.id)}>Delete</button>&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>
            <button onClick={markAllDone}>Mark All as Done</button>
        </>
    );
}
