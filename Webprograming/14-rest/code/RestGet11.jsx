// 코딩앙마:  React JS #10, 11, 12
// JSON-sever 를 이용한 Rest-get

import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestGet11 = () => {
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
  const [days, setDays] = useState([])

  //
  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDays(data)
      })
  }, [])

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
  // const wordList = dummy.words.filter((word) => word.day === Number(day))
  const [words, setWords] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setWords(data)
      })
  }, [day])

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

export default RestGet11

// json-sever 설치
// $ npm install -g json-server
// db/data.json이 있는 곳
// $ json-server --watch ./src/save/angma/db/data.json --port 3001
// \{^ ^}/ hi 가 나오면 성공
// 접속 : 3001 포트를  cmd+click

/**
 * Rest API
 *
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 *
 * 검색 : localhost:3001/words?day=1  (?property=value)
 */

// 테이블 각각에 checkbox를 추가함 (공부가 된 것을 선택하기 위함)

/** 
 * Rest Api로 데이터 (db/dada.json)을 접근함 (CRUD)
 * dummy로 접근하는 것을 fetch 함수로 접근함
 * API 명령어 사용은 rendering이 끝난 후 : useEffect와 useState로 표현함
 * 
 */
