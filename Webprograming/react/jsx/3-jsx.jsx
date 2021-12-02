// Attribute에도 { } 를 이용한 JS 코드를 사용할 수 있음
// classname 대신 className, onclick 대신 onClick 등의 이름 사용
// 아래 className은 isOn 의 값에 따라 btn-light가 됨

export default function App() {
  let isOn = false
  return (
    <button className={isOn ? 'btn-dark' : 'btn-light'}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
}