import { useState } from "react";

export function TodoInput(props) {
  const {handleAddTodo} = props;
  const [inputValue, setInputValue] = useState("")

  const addTodo = () => {
    if (!inputValue.trim()) return;
    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input 
        value={inputValue} 
        onChange={(e) => 
        setInputValue(e.target.value)}
      onKeyDown={ (e) => {
        if (e.key === "Enter") {
          addTodo()
        }   
      }}
      placeholder="Add a new task" />
      <button onClick={() => {
        if (!inputValue) {return};
        handleAddTodo(inputValue);
        setInputValue("");
      }}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  )
}