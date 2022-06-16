import { useState, useEffect } from 'react'

const TodoRestApi = () => {
  const [todo, setTodo] = useState('')
  const [isDone, setIsDone] = useState(false)
  const [isRemoved, setIsRemove] = useState(false)

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTodos(data)
      })
  }, [todo, isDone, isRemoved])

  const handleInput = (e) => setTodo(e.target.value) // String

  const handleAdd = (e) => {
    e.preventDefault()
    if (todo === '') return
    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: todos.length + 1 + todo,
        title: todo,
        isDone: false,
      }),
    })
    setTodo('') // to re-render and clear input value
  }

  // todos 배열 중 isDone 이 true 인 것은 모두 delete 시킴 (side-effect)
  const handleDelete = () => {
    setIsRemove(!isRemoved) // for re-rendering
    todos.forEach((t) => {
      if (t.isDone === true) {
        fetch(`http://localhost:3001/todos/${t.id}`, {
          method: 'DELETE',
        })
      }
    })
    setIsRemove(!isRemoved) // for re-rendering
  }

  // 해당 id의 todo를 읽어서, 새로운 todo를 만들고 PUT으로 보냄
  const toggleTodo = (id) => {
    // const newTodos = [...todos]
    // const done = newTodos.find((todo) => todo.id === id) // done is an object
    // done.isDone = !done.isDone
    // setTodos(newTodos)

    const todo = todos.find((td) => td.id === id) // find the object with id
    setIsDone(!isDone) // for re-rendering
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, isDone: !todo.isDone }),
    })
      // .then((res) => res.json())
      .then((res) => {
        // console.log('after put', '성공:', data)
        if (res.ok) {
          setIsDone(!isDone) // for re-rendering
        }
      })
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.length}</div>
    </div>
  )
}

//------- TodoList 컴포넌트 ---------------------------------------

// To make an array with <li>
const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((el, i) => (
    <li style={{ listStyle: 'none' }} key={i}>
      <input
        type='checkbox'
        checked={el.isDone}
        onChange={() => toggleTodo(el.id)}
      />
      {el.title}
    </li>
  ))
}

export default TodoRestApi

// REST api 를 이용하여 Todo List 구현
// todos 정보는 db 파일에 저장됨.
// 따라서 새로 고침(re-fresh) 를 하더라도 todos 가 초기화 되지 않음

/**
 * 데이터 예 : db/todo.json 
$ json-server --watch ./src/save/todoRest/db/todo.json --port 3001 &

{
  "todos": [
    {
      "id": "1요리",
      "title": "요리",
      "isDone": false
    },
    {
      "id": "2청소",
      "title": "청소",
      "isDone": true
    },
    {
      "id": "3공부",
      "title": "공부",
      "isDone": true
    }
  ]
} 
 */

// C, R, U, D 에 해당하는 fetch() 함수를 실행함.
// R (Get method)에 해당되는 부분을 useEffect로 구현함.
// 이 useEffect는 C, U, D 액션을 실행한 후 (db 정보 수정 후)
// re-rendering을 위해서도 실행되어야 함.
// 따라서 useEffect 의 dependency 변수를 등록해야 함.

// C, U, D 액션이 발생했음을 알려주기 위해 각각에 대한 set 변수 [todo, isDone, isRemoved] 이용
// todo는 todos에 저장하기 위한 객체 타입 {id, title, isDone} 을 갖지만,
// isDone과 isRemove는 단지 액션이 발생했음을 알려주기 위한 용도: boolean.
// 각 C, U, D 실행 전과 후에 이 값들을 toggle 시킴
// 그러면 useEffect에서 fetch-get 메소드에 의해서 todos의 값이 수정되고,
// react는 re-rendering을 실행함.
