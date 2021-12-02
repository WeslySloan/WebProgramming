// Class의  render() { return ( ....) } 형태의 포맷을
// Function에서는 render()를 생략하고 return 만으로 표현

// node 버전 15.11.0    npx, npm 버전 7.6.0, 
// 최신 버전에서는 import React from 'react'; 도 생략하고 사용

export default function App() {
  return (
    <div className="App">
      Hello, World! Function!!
    </div>
  );
}
