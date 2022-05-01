import { useState } from 'react';

// Todo List에 추가하는 것 까지 

const TodoAdd = () => {
  const [todo, setTodo] = useState('')    // String
  const [todos, setTodos] = useState([])  // array of String

  // input으로부터 입력된 값을 상태 변수 todo에 저장함.
  const handleInput = e => setTodo(e.target.value);

  // "Add" 버튼의 클릭이벤트 핸들러. todo를 todos에 추가시킴.
  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => [...prevTodos, todo])
    setTodo("");
  }

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((td,id) => <li key={id}>{td}</li>)}
      </ul>
      <input onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoAdd;

// 상태 변수 todo의 값이 <input> 의 value 에 사용되고 있음
// 따라서 todo의 타입은 String 이 되어야 함

// 상태 변수 todos는 input으로 부터 입력된 값(todo, String)들을 저장하는 배열

// todos 를 바꾸려고 할 때는, 현재의 배열을 복사하여 ([...prevTodos])
// 새로운 배열을 구성하는 과정에서 추가하고 싶은 것을 표현함.

// todos.map((td,id) =>   의 return 값은 <li> 태그와 key 값이 포함된 
// 원소들의 배열로서, 이 배열을 { } 으로 감싸서 JSX 표현 식 내에 삽입함
