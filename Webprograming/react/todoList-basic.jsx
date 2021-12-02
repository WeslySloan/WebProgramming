import { useState } from 'react';

// Todo List에 추가하는 것 까지

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = e => {
    console.log(e.target.value);
    setTodo(e.target.value);
  }

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: todos.length + 1, text: todo, completed: false }]
    })
    console.log(todos);
    setTodo("");
  }

  return (
    <div className="App">
      <h3>할일</h3>
      <ul>
        {todos.map(td => { return <li key={td.id}> {td.text} </li> })}
      </ul>
      <input onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}