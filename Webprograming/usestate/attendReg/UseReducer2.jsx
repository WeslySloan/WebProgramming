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

const UseReducer2 = () => {
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

export default UseReducer2;

// 여러 형태의 상태 처리가 한 곳 reducer 함수에서 이루어짐. 
// reducer 함수는 컴포넌트 밖에서 정의되므로, 여러 컴포넌트들 사이에서 공유되어 사용됨.
// 상태 변수의 구조가 복잡한 경우 (즉, 여러 프로퍼티들로 구성된 객체), 이 상태 변수를 처리해야 하는 여러 
// 형태의 경우를 명령어로 표현하고, 이들을 모두 reducer에서 처리함.

// 여기서는 두 개의 상태 변수 name과 studentsInfo 가 사용됨. 
// name은 input의 값을 읽어 오는 목적으로 사용되며 단순한 구조를 가짐.
// studentsInfo 는 좀 더 복잡한 구조를 가지며, 이 변수의 상태 관리는 reducer에서 명령어들로 구분하여 처리됨. 

// reducer의 return 타입은 객체이므로, return {count, ..., students: ....}
// 각 student의 id를 Date.new() 정하고, 이 값을 map의 key 값으로 이용함. 

// stundentsInfo의 구조
// {count: 2, students: [{id: Date.now(), name: name, isHere: false,}, { ... }, ...]}