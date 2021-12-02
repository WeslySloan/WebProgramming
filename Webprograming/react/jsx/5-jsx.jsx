// Babel은 JSX를 React.createElement() 호출로 컴파일함
// 다음 두 예는 동일함

import React from 'react';

export default function App() {
  const element1 = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  const element2 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
  );

  return (
    <div>
      {element1}
      {element2}
    </div>
  );
}