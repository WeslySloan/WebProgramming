import { useState} from 'react';

const AttendReg1 = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생수: ?</p>
      <input 
        type="text" 
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button>추가</button>
    </div>
  );
};

export default AttendReg1;

// 초기 화면
// input의 value가 name에 들어가도록 함
// 
