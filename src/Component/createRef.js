import React, { Component } from 'react';

// ref를 사용하는 방법

// 1. 콜백함수 : ref를 달고자 하는 요소에 콜백함수를 props로 전달!
// Ex) <input ref={(ref)=>{this.superman=ref}}/>
// 2.createRef함수 사용

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus(); //나중에 DOM에 접근할 때, this.input.current 조회하면 됨
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
