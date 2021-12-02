// JSX에서 함수(람다로 정의함) 와 객체 사용

export default function App() {
  const formatName = (u) => u.firstName + ' ' + u.lastName
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  }
  return (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
}