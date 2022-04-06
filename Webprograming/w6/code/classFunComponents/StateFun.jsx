import { useState } from 'react';

export default function StateFun() {
  const [state, setState] = useState({ loading: true, formData: 'no-data' });
  setTimeout(handleData, 4000);  // 4초 후에 handleData를 호출

  // const handleData = () => { // hoisting 이 안되어 에러
  function handleData() {
    const data = 'new-data';
    // const { formData } = state;  // formData로 할 경우 무한 loop로 동작됨
    const formData2 = ' : no-data';

    setState((prevState) => {
      const newState = {
        loading: false,
        formData: data + formData2, // formData로 할 경우 무한 loop로 동작됨
      };
      return newState;
    });
  }

  return (
    <div>
      <span>로딩중: {String(state.loading)}</span> <br />
      <span>결과: {state.formData}</span>
    </div>
  );
}
