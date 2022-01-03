import { useState } from 'react';

// Todo List에 추가하는 것 까지

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = e => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  }

  const handleAdd = e => {
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
        {todos.map(todo => <li key={todo.id}> {todo.text} </li>)}
      </ul>
      <input onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}


/* <html>

<head>

  <head>
    <title>Todo List Table</title>
    <script>
      window.onload = () => {
        let inputs = document.querySelectorAll(".value-input");
        inputs[1].onclick = () => todoAdd();

        let inputss = document.querySelectorAll(".del-button");
        inputss[0].onclick = () => del();

        let todoAdd = () => {
          var trNode = document.querySelector('thead tr');  // template 대상 선정
          var tb = document.querySelector("tbody");      // 내용이 첨부될 위치
          var clone = trNode.cloneNode(true);            // template를 새로 만듦
          var tds = clone.querySelectorAll("td");            // template 된 공간을 td 단위로 구분
          tds[0].innerHTML = '<td><input type="checkbox"></td>';  // checkbox로 입력  
          tds[1].textContent = inputs[0].value;          // template에 내용 입력
          tb.appendChild(clone);                         // 새로 만들어진 내용을 tbody의 끝에 첨부

          inputs[0].value = '새로운 할 일 입력';
        }
      }
//
      let del = () => {
        var selected = document.querySelectorAll('tbody input');
        for (var i = 0 ; i < selected.length ; i++) {
          if ( selected[i].checked === true ) {
            selected[i].parentElement.parentElement.remove();
          }
        }
      }
//
    </script>
  </head>

<body>
  <h1>Todo List</h1>
  <hr>
  <input type="button" class="del-button" value="선택 삭제" /> <br><br>
  <table border="1">
    <thead>
      <tr>
        <td>선택</td>
        <td>할 일 항목</td>
      </tr>
    </thead>
    <tbody>
      <!-- 이곳에 데이터가 추가됨 -->
    </tbody>
  </table>
  <br>
  <div>
    <input class="value-input" type="text" value="새로운 할 일 입력" />
    <input class="value-input" type="button" value="입력" />
  </div>
</body>

</html> */