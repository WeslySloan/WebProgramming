import { useState } from 'react';

// Todo List에 추가하는 것 까지 

const TodoAdd = () => {
  const [todo, setTodo] = useState('')    // object (todo)
  const [todos, setTodos] = useState([])  // array of objects

  const handleInput = e => {
    setTodo(e.target.value) 
  }

  

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos([...todos,todo])
    setTodo('');
  }

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {
          todos.map((a, idx) => <li key={idx}>{a}</li>)
        }
      </ul>
      <input onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoAdd;