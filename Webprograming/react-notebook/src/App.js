import { useState } from 'react';

const App = () => {
  const [spanStyle, setSpanstyle] = useState({ color: "red" })
  const newStyle = { color: "green", fontSize: "30px", display: "block", width: "6em", border: "3px dotted magenta", margin: "20px" }
  return (
    <div>
      <h3> CSS 스타일 동적 변경</h3>
      <hr />
      <p style={{ color: "blue" }}>  이것은 <span style={spanStyle}> 문장입니다. </span> </p>
      <input type="button" value="스타일변경" onClick={() => setSpanstyle(newStyle)} />
    </div>
  );
};

export default App;
// import { useReducer } from 'react';

// const initialState = {count: 0};

// // binary function : (state,action) => newState
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>Count: {state.count}</div> 
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </div>
//   );
// }

// export default App;


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
