import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };

    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(stud => stud.id !== action.payload.id)
      };

    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map(stud => 
          (stud.id === action.payload.id) ? { ...stud, isHere: !stud.isHere} : stud),
        // {
        //   if (stud.id === action.payload.id) {
        //     return {...stud, isHere: !stud.isHere};
        //   }
        //   return stud;
        // }),
      }

    default:
      return state;
  }
}

const initialState = {
  count: 0,
  students: []
}

const AttendReg4 = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생수: {studentsInfo.count}</p>
      <input 
        type="text" 
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {dispatch({type: 'add-student', payload: {name}}); setName('');}}>추가</button>
      {studentsInfo.students.map(stud => 
        <Student key={stud.id} 
          name={stud.name} 
          dispatch={dispatch} 
          id={stud.id} 
          isHere={stud.isHere}/>)}
    </div>
  );
};

const Student = ({ name, dispatch, id, isHere}) => 
  <div>
    <span style={{
      textDecoration: isHere ? "line-through" : 'none',
      color: isHere ? 'gray' : 'black',}}
      onClick={()=> dispatch({ type: 'mark-student', payload: {id}})}
    >{name}</span>
    <button onClick={() => dispatch({ type: 'delete-student', payload: {id}})}>삭제</button>
  </div>

export default AttendReg4;

// 출석 기능 추가
// Student 컴포넌트에 isHere 파라메터 추가
// span에 onClick 이벤트:
// dispatch({ type: 'delete-student', payload: {id}})

// reducer에서 'mark-student' 명령어 처리
// 해당 id 를 찾아서 isHere의 값을 toggle 시킴.

// span의 style을 isHere에 따라 바꿔 보이도록 함