import React from 'react';

const Mailbox = () => {
  const messages = ['React', 'Re: React', 'Re:Re: React']
  // const messages = []
  return (
    <MailBox1 unreadMessages={messages} />
  );
};

const MailBox1 = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2> You have {unreadMessages.length} unread messages. </h2>
      }
      {/* {true.toString()} */}
    </div>
  )
}

export default Mailbox;

// 타입 체킹을 적용하지 않는 채, 진리표에 따라 && 와 || 를 구현하기 때문에 발생하는 현상.
// const and = (x, y) => x ? y : false
// const or =  (x, y) => x ? true : y

// let x = false && 'abc'  // x 값은 false
// let y = true && 'abc'   // y 값은 'abc'
// let a = false || 'abc'  // a 값은 'abc'
// let b = true  || 'abc'  // b 값은 true

// (unreadMessages.length > 0) && <h2>...</h2> 
// (unreadMessages.length > 0) 가 true 이면 <h2>...</h2>이 결과 값이다.

// boolean 값은 그 자체로 render되지 않으며, {true.toString()} 형태로 render 해야 함
