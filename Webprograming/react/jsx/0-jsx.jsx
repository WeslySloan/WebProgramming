// 각 컴포넌트의 return 값을 JSX로 표현함
// JSX는 UI(html과) 과 Logic (JavaScript)가 함께 혼합되어 표현된 형태
// 마크업을 기본으로, JS는 중괄호 {} 로 표현함
// 한 컴포넌트 내에 UI와 Logic을 내포함으로써 encapsulation을 구현함 

export default function App() {
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>
  return (
    <>
      {/* 리턴 값은 반드시 div 등으로 묶어야 하며, div를 사용하지 않을 때 <>...</> */}
      element    {/* 일반 스트링 */}
      {element} {/* JS */}
    </>
  );
}