import React, { useState } from 'react';
import TodoList from './TodoList';

function App () {
  const [todos, setTodos] = useState (['Todo 1', 'Todo 2  '])
  return (
    <>
    <TodoList/>
    <input type='text' />
    <button>Add todo</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
