import { useState, useEffect } from 'react-state';

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
    }, [todo, isDone, isRemoved, setIsDone])

    const handleInput = (e) => setTodo(e.target.value) // String

    const handleAdd = (e) => {
        e.preventDefault()
        if (todo === '') return
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: todos.length + 1 + todo,
                title: todo, 
                isDone: false,
            }),
        })
    setTodo('')
    }

    // const
    const handleDelete = () => {
        setIsRemove(!isRemoved)
        todos.forEach((t) => {
            if ( t.isDone === true ) {
                fetch(`http://localhost:3001/todos/${t.id}`, {
                    method: 'DELETE',
                })
            }
        })
        setIsRemove(!isRemoved)
    }

    //
    const toggleTodo = (id) => {
        // 
        //
        //
        //

        const todo = todos.find((td) => td.id === id )
        setIsDone(!isDone)
        fetch(`httpL//localhost:3001/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...todo, isDone: !todo.isDone}),
        })
            //   const
            .then((res) => {
                //   return
                if (res.ok) {
                    setIsDone(!isDone)
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

// const

//
const TodoList = ({ todos, toggleTodo }) => {
    return todos.map((el, i) => (
        <li style={{ listStyle: 'none' }} key={i}>
            <input
                type = 'checkbox'
                checked={el.isDone}
                onChange={() => toggleTodo(el.id)}
            />
          {el.title}
        </li>
    ))
}

export default TodoRestApi

// import { useState, useEffect } from "react";
// // Usage
// function App() {
//   const size = useWindowSize();
//   return (
//     <div>
//       {size.width}px / {size.height}px
//     </div>
//   );
// }
// // Hook
// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     // Add event listener
//     window.addEventListener("resize", handleResize);
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }

// export default App;





// import { useState } from 'react';

// // Todo List??? ???????????? ??? ?????? 

// const TodoAdd = () => {
//   const [todo, setTodo] = useState('')    // object (todo)
//   const [todos, setTodos] = useState([])  // array of objects

//   const handleInput = e => {
//     setTodo(e.target.value) 
//   }

  

//   const handleAdd = e => {
//     // e.preventDefault();
//     if (todo === "") return;
//     setTodos([...todos,todo])
//     setTodo('');
//   }

//   return (
//     <div>
//       <h3>Todo List</h3>
//       <ul>
//         {
//           todos.map((a, idx) => <li key={idx}>{a}</li>)
//         }
//       </ul>
//       <input onChange={handleInput} />
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// }
// // useRef??? ?????? input??? value??? ?????? ??? ??? ???????????? ?????????

// export default TodoAdd;

// import React, { useState } from 'react';
// import './Game.css';

// // To add onclick handler
// // useState, clicking the button changes into X

// const Game = () => {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         <div>{/* status */}</div>
//         <ol>{/* TODO */}</ol>
//       </div>
//     </div>
//   );
// }

// const Board = () => {
//   const renderSquare = (i) =>  <Square />
//   const status = 'Next player: X';
//   return (
//     <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {renderSquare(0)}
//           {renderSquare(1)}
//           {renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {renderSquare(3)}
//           {renderSquare(4)}
//           {renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {renderSquare(6)}
//           {renderSquare(7)}
//           {renderSquare(8)}
//         </div>
//       </div>
//   )
// }

// const Square = () => {
//   const [state, setState] = useState({value: null})
//   return (
//     <button  
//       className="square"  
//       onClick={() => setState({value: 'X'})}
//     >
//       {state.value}
//     </button>
//   )
// }

// export default Game;

// import React, { useState } from 'react';
// import './Game.css';

// // To add onclick handler
// // useState, clicking the button changes into X

// let globalFlag = false
// const useNext = () => {
//   const [flag, setFlag] = useState(globalFlag)
//   return [flag, () => {
//     setFlag(!globalFlag)
//     return globalFlag
//   }]
// }

// const Game = () => {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//       <div className="game-info">
//         <div>{/* status */}</div>
//         <ol>{/* TODO */}</ol>
//       </div>
//     </div>
//   );
// }


// const Board = () => {
//   const [flag] = useNext();
//   return (
//     <div>
//         <div className="status">Next player: {flag ? "O": "X" }</div>
//         <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//         </div>
//         <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//         </div>
//         <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//         </div>
//       </div>
//   )
// }

// const Square = () => {
//   const [state, setState] = useState(null) 
//     const [flag, setFlag] = useNext();
//   return (
//     <button  
//       className="square"  
//       onClick={() => {
//         console.log(flag)
//         if ( state === null ) {
//           setState(setFlag() ? "O": "X")
//         }
//       }}
//     >
//       {state ?? state} 
//     </button>
//   )
// }

// export default Game;

// import React, { useState } from 'react';

// const Calculator = () => {

//   const [x, setX] = useState(0)
//   const [y, setY] = useState(0)
//   const [sum, setSum] = useState(0)

//   return (
//     <div>
//         <h3>????????? ????????????</h3>
//         <p>??? ?????? </p>
//         <hr/>
//         <div>
//             <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
//               setX(parseInt(e.target.value)) 
//             }}></input>
//             +
//             <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
//               setY(parseInt(e.target.value)) 
//             }}></input>
//             <input type="button" defaultValue="=" onClick={() => {
//               setSum(x+y);
//             }}/>
//             <input type="text" value = {sum} dir="rtl" readOnly = "true" />
//         </div>
//     </div>
//   );
  
// };

// export default Calculator;

// import React, { useState } from 'react';

// const Calculator = () => {

//   const [x, setX] = useState(0)
//   const [y, setY] = useState(0)
//   const [sum, setSum] = useState(0)

//   // const equal = () => {
//   //   setNumber(number+txtx+txty);
//   // }

//   return (
//     <div>
//         <h3>????????? ????????????</h3>
//         <p>??? ?????? </p>
//         <hr/>
//         <div>
//             <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
//               setX(parseInt(e.target.value)) 
//             }}></input>
//             <input type="button" defaultValue="+" onClick={() => {
//               setSum(x+y);
//             }}/>
//             <input type="button" defaultValue="-" onClick={() => {
//               setSum(x-y);
//             }}/>
//             <input type="button" defaultValue="*" onClick={() => {
//               setSum(x*y);
//             }}/>
//             <input type="button" defaultValue="/" onClick={() => {
//               setSum(x/y);
//             }}/>
          
//             <input type="text" defaultValue="0" dir="rtl" onChange={(e) => {
//               setY(parseInt(e.target.value)) 
//             }}></input>
//           =
//             <input type="text" value = {sum} dir="rtl" readOnly = "true" />
//         </div>
//     </div>
//   );
  
// };

// export default Calculator;

// import React from 'react';

// const Ex810 = () => {

//     function creatDIV() {
//         var obj = document.getElementById("parent");
//         var newDIV = document.createElement("div");
//         newDIV.innerHTML = "?????? ????????? DIV?????????.";
//         newDIV.setAttribute("id", "myDiv");
//         newDIV.style.backgroundColor = "yellow";
//         newDIV.onclick = function() {
//             var p = this.parentElement; // ?????? HTML ?????? ??????
//             p.removeChild(this); // ????????? ??????????????? ??????
//         };
//         obj.appendChild(newDIV);
//     }

//     function createA() {
//       const a = document.createElement("a");
//       a.innerHTML = "DIV ??????"
//       a.href="javascript:creatDIV()"
//     //   a.SetAttribute("link");
//       a.onclick = () => createDIV();
//       div.appendChild(a);
//     }
    
//     return (
//       <div>
//         <h3>DIV ????????? ???????????? ??????, ??????, ???????????? ??????</h3>
//         <hr />
//         <p>DOM ????????? ???????????? ????????? ????????? ??? ????????????.
//         createElement(), appendChild(), 
//         removeChild() ???????????? ???????????? ????????? ????????? ??????,
//         ??????, ???????????? ???????????????.</p>
//         {/* <a href="javascript:createDIV()">DIV ??????</a> */}
//       </div>
//     )
// }

//   export default Ex810;
// import React from 'react';

// export default function Ex211() {
//     document.title = "????????? ??????"
//     return (
//     <div>
//         <h3>????????? ??????</h3>
//     <hr />
//         <p> ????????? ??????????????? ???????????????.</p>
//     <img src={require ('./Elvis1.jpg')} width="150" height="200"
// 	 	  alt="Elvis" />
//     <img src={require ('media/kitae.jpg')} width="80" height="100"
// 		 alt="?????????????????????" />
//     <img src={require ('http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif')}
// 		 alt="?????? ?????? ?????????" width="100" height="100" /> 
//     </div>
//     )
// }

// import React from 'react';

// const Ex810 = () => {

//     function createDIV() {
//         var obj = document.getElementById("parent");
//         var newDIV = document.createElement("div");
//         newDIV.innerHTML = "?????? ????????? DIV?????????.";
//         newDIV.setAttribute("id", "myDiv");
//         newDIV.style.backgroundColor = "yellow";
//         newDIV.onclick = function() {
//             var p = this.parentElement; // ?????? HTML ?????? ??????
//             p.removeChild(this); // ????????? ??????????????? ??????
//         };
//         obj.appendChild(newDIV);
//       }

//     return (
//       <div>
//         <h3>DIV ????????? ???????????? ??????, ??????, ???????????? ??????</h3>
//         <hr />
//         <p>DOM ????????? ???????????? ????????? ????????? ??? ????????????.
//         createElement(), appendChild(), 
//         removeChild() ???????????? ???????????? ????????? ????????? ??????,
//         ??????, ???????????? ???????????????.</p>
//         <a href="createDIV()">DIV ??????</a>
//       </div>
//     )
// }

// export default Ex810;

// import React from 'react';

// export default function Ex203() {
//     document.title = "&lt;div&gt;?????????  &lt;span&gt;?????????"
//     return (
//     <body>
//         <h3>??????</h3>
//         <hr />
//         <div style={{backgroundColor:"skyblue", padding:"20px"}}>
//         ?????? ????????? ????????? ????????? ?????? ????????????
//         <span style={{ color: "red" }}> ??????</span>??? ????????? ?????? ?????? ????????? ????????? ???????????? ??????,
//         <span style={{ color: "red" }}> ??????</span>??? ????????? ?????? ?????? ?????????.
//         </div>
//         <p>
//             ~?????? ?????? ???????????? ?????????~
//         </p>
//     </body>
//     )
// }

// import React from 'react';

// export default function Ex211() {
//     document.title = "????????? ??????"
//     return (
//     <div>
//         <h3>????????? ??????</h3>
//     <hr />
//         <p> ????????? ??????????????? ???????????????.</p>
//     <img src={require ('./Elvis1.jpg')} width="150" height="200"
// 	 	  alt="Elvis" />
//     <img  width="80" height="100"
// 		 alt="?????????????????????" />
//     <img 
// 		 alt="?????? ?????? ?????????" width="100" height="100" /> 
//     </div>
//     )
// }


// import React from 'react'

// export default function App() { 
//   document.title='??? ????????? '
//   return (
//     <div> 
//       <h1>1??? ???????????? ?????????</h1>
//       <h2>1??? HTML</h2>
//     </div>
//   )
// }

// import Ex82multiComp from './w5/code/Ex82multiComp';

// export default function App() { 
//   return (
//     <div> 
//       <Ex82multiComp />
//     </div>
//   )
// }

//////////////////////

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


