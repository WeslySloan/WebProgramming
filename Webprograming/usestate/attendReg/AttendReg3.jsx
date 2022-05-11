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

    default:
      return state;
  }
}

const initialState = {
  count: 0,
  students: []
}

const AttendReg3 = () => {
  const [name, setName] = useState('')
  const [studentsInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생수: {studentsInfo.count} </p>
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
        />)}
    </div>
  );
};

const Student = ({ name, dispatch, id }) => 
  <div>
    <span>{name}</span>
    <button onClick={() => dispatch({ type: 'delete-student', payload: {id}})}>삭제</button>
  </div>

export default AttendReg3;

// delete(삭제) 기능 추가
// reducer에 'delete-student' 구현 : filter에서 주어진 id를 제거함

// Student 컴포넌트에서 <button>에 onclick를 추가하고 dispatch에 'delete-student' 명령어 설정
// 이를 위해서 Student 컴포넌트에 전달되는 파라메터를 추가 
