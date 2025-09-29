import React, { useState } from 'react';

export function TodoCard(props) {
  const {todo, handleDeleteTodo, handleToggleDoneUndone, handleEditTodo} = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const saveEdit = () => {
    if (editedTitle.trim() !== "") {
      handleEditTodo(todo.id, editedTitle.trim());
      setIsEditing(false);
    }
  };


  return (
    <div className="card todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <p 
          style={{textDecoration: todo.isCompleted ?     "line-through" : "none",
          textDecorationColor: todo.isCompleted ? "red" : "inherit",
          textDecorationThickness: "2px" }}>
          {todo.title}
        </p>
      )}
     
     
     <div className="todo-buttons">
      <button 
        onClick={() => setIsEditing(true) }
        disabled={todo.isCompleted}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      
      <button  onClick={() => handleToggleDoneUndone(todo.id)}>
          {todo.isCompleted ? <h6>Not Done</h6> : <h6>Done</h6>}
      </button>
      
      <button onClick={() => handleDeleteTodo(todo.id)}>
        <h6>Delete</h6>
      </button>
     </div>
    </div>
  )
}