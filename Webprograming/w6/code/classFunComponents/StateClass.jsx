// DoIt(108 쪽)

import React, { Component } from 'react';

class StateClass extends React.Component {
  constructor(props) {
    super(props);       // this 사용을 위해 필요함
    this.state = {      // 상태의 초기 값 
      loading: true,
      formData: 'no-data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);  // 4초 후에 handleData를 호출
  }

  // handleData() {
  //   const data = 'new-data ';
  //   const { formData } = this.state; // destructuring, 
  //   // formData 키에 해당 value를 formData에 할당
  //   // 여기서 formData는 local 변수

  //   // set 함수 호출로 상태 업데이트 : loading 과 formData 값 변화
  //   this.setState({
  //     loading: false,
  //     formData: data + formData,
  //   });
  // }
  
  // 이전 상태를 이용하는 경우
  handleData() {
    const data = 'new-data ';
    this.setState(function(prevState) {
      const newState = {
        loading : false,
        formData: data + prevState.formData,
      };
      return newState;
    });
  }

  render() {
    return (
      <div>
        {/* 상태 데이터는 this.state로 접근 */}
        <span>로딩중: {String(this.state.loading)}</span> <br />
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateClass;