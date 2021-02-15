import React, { useState } from 'react';

const EventPractice = () => {
  const [form, SetForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사한 뒤,
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌운다
    };

    SetForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    SetForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
export default EventPractice;
