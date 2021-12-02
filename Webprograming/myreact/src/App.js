export default function App() {
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  return (
    <div>
      {element}
    </div>
  );
}

// import { useState } from 'react';

// // Todo List에 추가하는 것 까지

// export default function App() {
//   const [todo, setTodo] = useState('')
//   const [todos, setTodos] = useState([])

//   const handleInput = e => {
//     console.log(e.target.value);
//     setTodo(e.target.value);
//   }

//   const handleAdd = e => {
//     e.preventDefault();
//     if (todo === "") return;
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: todos.length + 1, text: todo, completed: false }]
//     })
//     console.log(todos);
//     setTodo("");
//   }

//   return (
//     <div className="App">
//       <h3>할일</h3>
//       <ul>
//         {todos.map(td => { return <li key={td.id}> {td.text} </li> })}
//       </ul>
//       <input onChange={handleInput} value={todo} />
//       <button onClick={handleAdd}>추가</button>
//     </div>
//   );
// }

// export default function App() {
//   const formatName = (u) => u.firstName + ' ' + u.lastName
//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   }
//   return (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );
// }

// export default function APP () {
//   const name = 'Josh Perez';
//   const element = <h1>Hello, {name}</h1>
//   return (
//     <>
//       {/*리턴 값은 반드시 div 등으로 묶어야 하며, div를 사용하지 않을 경우 <>...</>*/}
//       element {/* 일반 스트링*/}
//       {element} {/*35*/}
//     </>
//   )
// }




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

