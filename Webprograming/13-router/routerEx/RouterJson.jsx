// https://www.youtube.com/watch?v=vI-XtN_Zdfg&list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-&index=10
// 코딩앙마 React JS #10 라우터 구현; reat-router-dom 6 로 구현

import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import dummy from './data.json'
import { useParams } from 'react-router-dom'

const RouterJson = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <h1>
        <Link to='/'>토익 영단어(고급) </Link>
      </h1>
      <div className='menu'>
        <a href='#x' className='link'>
          단어 추가
        </a>
        <a href='#x' className='link'>
          Day 추가
        </a>
      </div>
    </div>
  )
}

const DayList = () => {
  return (
    <ul className='list_day'>
      {dummy.days.map((d) => (
        <li key={d.id}>
          <Link to={`/day/${d.day}`}>Day {d.day}</Link>
        </li>
      ))}
    </ul>
  )
}

const Day = () => {
  const param = useParams() // url 값이 {day: '3'} 형태로 들어 옴
  console.log('param: ', param)
  const day = param.day // day의 타입은 스트링
  const wordList = dummy.words.filter((word) => word.day === Number(day))

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// url이 잘못되었을 경우, 다른 path에는 매칭되지 않지만
// EmptyPage의 path가 *이므로, 이곳에 매칭되어 다음 컴포넌트를 실행함
const EmptyPage = () => {
  return (
    <div>
      <h2>잘못된 접근입니다.</h2>
      <Link to='/'>
        <h2 style={{ color: 'blue' }}>돌아가기</h2>
      </Link>
    </div>
  )
}

export default RouterJson

// Link는 url 주소를 전달하고, Routes는 url 주소에 해당되는 page를 rendering함
// Link to 값에 해당되는 Route path 의 element 값이 rendering되도록 함.

// useParams : react-router-dom에서 제공하는 hooks
// url에 포함된 값을 얻을 때 사용
// 예: "Day 2" 클릭시, url에 "/day/2"로 표시됨
// usePrams() 가 return 하는 객체는 {day: '2'} 형태임
// 따라서 useParams().day 의 값은 2가 됨
