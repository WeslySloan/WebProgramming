// https://ko.reactjs.org/docs/hooks-effect.html

import React, { Component } from 'react';

export default class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log(`componentDidMount: ${this.state.count} times`)
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log(`componentDidUpdate: ${this.state.count} times`)
  }

  // componentDidMount : 0 times (오직 한 번 실행됨)
  // componentDidUpdate 는 맨 처음에는 실행되지 않다가, 이벤트 처리할 때 마다 실행됨
  // componentDidUpdate: 1 times
  // componentDidUpdate: 2 times

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}