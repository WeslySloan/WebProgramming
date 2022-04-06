import React from 'react';

// 컴포넌트 호출 (컴포넌트에 데이터 호출)
class App extends React.Component {
  render() {
    return (
      <div className="body">
        <span>App: </span>
        <br />
        <MyComponent name="message" />
      </div>
    );
  }
}

export default App;

// parameter는 this.props.name 이라는 이름으로 전달
class MyComponent extends React.Component {
  render() {
    const newName = this.props.name;
    return <span> MyComponent : {newName}</span>;
  }
}

/*
   데이터가 단방향으로 흐름: 부모로 부터 자식으로.
   프로퍼티 값은 수정될 수 없음.
*/
