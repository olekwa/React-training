import { useState } from 'react'
import {Header}from './components/Header'
import {TodoList} from './components/TodoList'
import {Tabs} from './components/Tabs'
import{TodoInput} from './components/TodoInput'
import { useEffect } from 'react'


function App() {
  const [todos, setTodos] = useState([
    {id:1, title:"Learn React", isCompleted:false},

  ])
 
  const [selectedTab, setSelectedTab] = useState("All");


  function handleAddTodo(newTodoTitle) {
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
    saveToLocalStorage([...todos, newTodo])
  }

  function handleDeleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id !==id) 
    setTodos(newTodoList);
    saveToLocalStorage(newTodoList);

  }


  function handleCompleteTodo(id) {
  const newTodoList = todos.map(todo =>
    todo.id === id ? { ...todo, isCompleted: true } : todo
  );
  setTodos(newTodoList);
  saveToLocalStorage(newTodoList);
}
  // function handleEditTodo()


  // const todos = [
  //   {id:1, title:"Learn React", isCompleted:false},
  //   {id:2, title:"Learn CSS", isCompleted:false},
  //   {id:3, title:"Learn JavaScript", isCompleted:true},
  //   {id:4, title:"Learn HTML", isCompleted:true},
  // ]

  function saveToLocalStorage(currentTodos) {
    localStorage.setItem("todos-app", JSON.stringify({todos: currentTodos}) )
  }
  useEffect(() => {
    const stored = localStorage.getItem("todos-app");
    if (!stored) return; // nothing in storage, do nothing

    let db = JSON.parse(stored);
    setTodos(db.todos);
  }, []);
  
  return (
    <>  
      <Header todos={todos}/> 
      <Tabs  selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo}  selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>  
    </>
  )
}

export default App
