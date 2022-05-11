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

    default:
      return state;
  }
}

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    }
  ]
}

const AttendReg2 = () => {
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
        <Student key={stud.id} name={stud.name} />)}
    </div>
  );
};

const Student = ({ name }) => 
  <div>
    <span>{name}</span>
    <button>삭제</button>
  </div>

export default AttendReg2;

// useReducer가 동작하는 초기 화면
// initialState 샘플로 구성
// '추가' 의 onClick에서 dispatch 명령어를 객체로 구성함
// dispatch({type: 'add-student', payload: {name}})

// reducer 정의.
// reducer의 state는 studentsInfo 임. 
// 'add-student' 명령어를 처리
// 한 학생에 대한 객체를 만들어 studentsInfo의 students 배열에 추가시킴
// default 추가

// '추가' 에 의해 첨가된 내용을 화면에 디스플레이 하기
// Student 컴포넌트 : <div> <span>{name}</span> <button>삭제</button> </div>를 return
// map함수를 이용하여 key 값을 갖는 Stduent 포맷의 원소들을 배열로 만들어 붙임
// initialState의 James는 제거 (count:0 으로 함)