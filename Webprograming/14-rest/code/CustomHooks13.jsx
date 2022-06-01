// 코딩앙마:  React JS #13
// Custom Hook 만들기

import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CustomHooks13 = () => {
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

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [url])

  return data
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
  const days = useFetch('http://localhost:3001/days')

  // const [days, setDays] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setDays(data)
  //     })
  // }, [])

  return (
    <ul className='list_day'>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  )
}

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)

  const toggleShow = () => setIsShow(!isShow)
  const toggleIsDone = () => setIsDone(!isDone)

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleIsDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button className='btn_del'>삭제</button>
      </td>
    </tr>
  )
}

const Day = () => {
  const day = useParams().day

  // const [words, setWords] = useState([])
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setWords(data)
  //     })
  // }, [day])

  const words = useFetch(`http://localhost:3001/words?day=${day}`)

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

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

export default CustomHooks13

// Custom Hooks 만들기
// Day와 DayList에서 사용하는 useEffect-fetch가 유사한 구조를 가짐
// 코드 Reuse를 위해 Custom Hook useFetch를 만들고, 이 둘을 새 hook으로 대치
// useFetch 에 주소를 props 으로 받음
