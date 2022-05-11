import { useReducer } from 'react';

const initialState = { color: "red" }

const reducer = (setspanStyle, action) => {
    switch (action.type) {
      case 'spanStyle':
        return { color: "green", fontSize: "30px", display: "block", width: "6em", border: "3px dotted magenta", margin: "20px" }
      default:
        throw new Error();
    }
  }

const Ex82useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3> CSS 스타일 동적 변경</h3>
      <hr />
      <p style={{ color: "blue" }}>  이것은 <span style={spanStyle}> 문장입니다. </span> </p>
      <input type="button" value="스타일변경" onClick={() => setSpanstyle(newStyle)} />
    </div>
  );
};

export default Ex82useReducer;

// import { useState } from 'react';

// const initialState = True;

// const reducer = (count, action) => {
//     switch (action.boolean) {
//       case 'True':
//         return (count + 1);
//       case 'False':
//         return (count - 1);
//       default:
//         throw new Error();
//     }
//   }

// const Ex82useReducer = () => {
//   const [spanStyle, setSpanstyle] = useState({ color: "red" })
//   const newStyle = { color: "green", fontSize: "30px", display: "block", width: "6em", border: "3px dotted magenta", margin: "20px" }
//   return (
//     <div>
//       <h3> CSS 스타일 동적 변경</h3>
//       <hr />
//       <p style={{ color: "blue" }}>  이것은 <span style={spanStyle}> 문장입니다. </span> </p>
//       <input type="button" value="스타일변경" onClick={() => setSpanstyle(newStyle)} />
//     </div>
//   );
// };

// export default Ex82useReducer;