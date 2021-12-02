// JSX는 JS의 일반 expression으로 (예를 들어, 산술식) 사용될 수 있음

export default function App() {
  const formatName = u => u.firstName + ' ' + u.lastName
  // let getGreeting = u => {
  //   if (u) {
  //     return <h1>Hello, {formatName(u)}!</h1>;
  //   }
  //   return <h1>Hello, Stranger.</h1>;
  // }
  let getGreeting = u => (u)
    ? <h1>Hello, {formatName(u)}!</h1>
    : <h1>Hello, Stranger.</h1>

  const user = { firstName: 'Harper', lastName: 'Perez' }
  return (
    <>
      {getGreeting(user)}
      {getGreeting()}
    </>
  );
}