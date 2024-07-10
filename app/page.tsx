'use client';

import React, { useState } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '30px' }}>To-do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Enter your todo"
        style={
          {
           padding: '10px', 
           width: 'calc(100% - 22px)', 
           marginBottom: '10px' ,
           color: 'black',  // Set the text color
           backgroundColor: 'white'  // Set the background color
          }
        }
      />
      <button onClick={addTodo} style={
          { 
            padding: '10px', 
            marginBottom: '20px',
            backgroundColor: 'gray',  // Set the background color 
          }
        }>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #ccc',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'white',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
