import React, { useState } from 'react';
import './CSS/TodoList.css'; 


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  // Filter todos based on the search query
//   const filteredTodos = todos.filter(todo => 
//     todo.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTodo}>Add</button>
      {/* Search Input */}
      {/* <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search tasks" 
      /> */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleToggleCompleted(index)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className="remove" onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;