import { useState } from 'react';

// 입력 : handleInput, handleAdd
// 처리 완료 : togggleTodo, handleDoneTodo
//  toggleTodo에서 todos가 사용되므로, toggleTodo를 Todo 컴포넌트에 넣을 수 없음
//  toggleTodo 은 top-level에서 정의되어, TodoList -> Todo 로 패스됨
// 삭제 : handleDelete

export default function TodoComplete() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = e => {
    setTodo(e.target.value)
  }
  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: todos.length + 1, title: todo, completed: false }]
    })
    setTodo('')
  }
  const handleDelete = () => {
    const newTodos = todos.filter(todo => !todo.complete) 
    setTodos(newTodos)
  }
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id) // done is an object. reference type
    done.complete = !done.complete
    setTodos(newTodos)
  }
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.filter(todo => !todo.complete).length}</div>
    </div>
  );
}


function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo
        key={todo.id} // Child가 여러 개이므로, 각 Todo 에 id가 주어짐
        todo={todo} toggleTodo={toggleTodo} />
    })
  )
}


function Todo({ todo, toggleTodo }) {
  const handleDoneClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox"
          checked={todo.complete}
          onChange={handleDoneClick} />
        {todo.title}
      </label>
    </div>
  )
}