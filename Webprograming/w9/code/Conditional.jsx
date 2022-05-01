function App() {
  const cond = false
  return (
    <div>
      {cond}
      {cond.toString()}
      {cond && <p>hello</p>}
      {cond ? <p>hello</p> : <p>안녕</p>}
    </div>
  )
}
