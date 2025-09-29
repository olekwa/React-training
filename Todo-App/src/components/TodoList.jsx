import {TodoCard} from './TodoCard'

export function TodoList(props) {
  const {todos, selectedTab, handleCompleteTodo} = props;

  const tab = "All";
  const filteredTodos = selectedTab === "All" ? 
  todos :
  selectedTab === "Completed" ?
    todos.filter(val => val.isCompleted) :
    todos.filter(val => !val.isCompleted);

  return (
    <>
      {filteredTodos.map((todo)  => {
        return (
          <TodoCard 
            key={todo.id} 
            
            {...props}
            todo={todo} />
        )
      })}
    </>
  )
}