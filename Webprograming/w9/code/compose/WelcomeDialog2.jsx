import React from 'react';
import './WelcomeDialog.css';

const WelcomeDialog2 = () =>
  <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />

const Dialog = ({ title, message }) => 
  <FancyBorder color="blue">
    <h1 className="Dialog-title"> {title} </h1>
    <p className="Dialog-message">  {message} </p>
  </FancyBorder>

const FancyBorder = ({ color, children }) => 
  <div className={'FancyBorder FancyBorder-' + color}> {children} </div>

export default WelcomeDialog2;

// WelcomeDialog2 는 Dialog의 "specialization" 이고, 
// Dialog는 "generic" 버전으로 볼 수 있음.
// 객체지향 프로그래밍에서는 superclass(generic) - subclass(specialization)
// 형태로 코딩하지만, 
// React 에서는 상속대신 컴포넌트의 composition (함수 호출) 로서 이 기능을 대신함
