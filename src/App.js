import React, { useState, useRef, useEffect } from 'react'; 
import TodoList from "./TodoList"
import * as uuid from 'uuid'
import styles from  "./App.css"
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  const todoMatriculeRef = useRef();
  const todoAttendanceRef = useRef();
const LOCAL_STORAGE_KEY = 'todosApp.todos';

function toggleTodos(id){
  const todoItems = [...todos]
  const todo = todoItems.find(todo => todo.id === id)
  todo.present = !todo.present;
  setTodos(todoItems)
}

useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storedTodos) setTodos(storedTodos)
}, [])


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
function clearTodos(){
  const newTodos = todos.filter(todo => !todos.present);
  setTodos(newTodos)
}
  function addTodo(e){
    const name = todoNameRef.current.value;
    const matricule = todoMatriculeRef.current.value;
    const attendance = todoAttendanceRef.current.value;
    if(name=== '' || matricule === ''){
      alert("enter name or matricule")
      return;
    }
    setTodos(previousTodos => {
      console.log(typeof(attendance))
      console.log(attendance)
      const primaryKey = uuid.v4();
      console.log(primaryKey)
      return [...previousTodos, {id: primaryKey, name:name, matricule:matricule, present:attendance}]
    })
  }
  return (
    <>
      <TodoList todos={todos} toggle={toggleTodos}/>
      <h2 >Todo App</h2>
      <input type="text" placeholder='Name...' ref={todoNameRef}/>
      <input type="text" ref={todoMatriculeRef} placeholder='Matricule...'/>
      <label htmlFor="attendance"> <input id="attendance" ref={todoAttendanceRef} type="checkbox" /> Present</label>
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      <button>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.present).length} left todo</div>
    </>
  );
}

export default App;
