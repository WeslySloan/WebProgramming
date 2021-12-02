// JSX element가 재귀적으로 nested될 수 있음

export default function App() {
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  return (
    <div>
      {element}
    </div>
  );
}