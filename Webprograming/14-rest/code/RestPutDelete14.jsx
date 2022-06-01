// 코딩앙마:  React JS #13
// Rest API - Put & Delete

import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestPutDelete14 = () => {
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

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)

  const toggleShow = () => setIsShow(!isShow)
  const toggleIsDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...word, isDone: !isDone }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone)
      }
    })
  }

  const del = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 }) // re-rendering이 일어나도록 상태 변수 값 수정
        }
      })
    }
  }

  if (word.id === 0) {
    return null // re-rendering 목적
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleIsDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button onClick={del} className='btn_del'>
          삭제
        </button>
      </td>
    </tr>
  )
}

const Day = () => {
  const day = useParams().day
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

export default RestPutDelete14

// Put(수정):
// ckeckbox로 클릭된 내용을 파일에 저장함
// Word 컴포넌트의 toggleDone 함수를 fetch - PUT 으로 수정
// fetch는 두 개의 인자로 구성됨. 두 번째 인자는 객체 형태

// Delete(삭제) :
// "삭제" 버튼을 클릭하면 confirm 창을 띄우고 삭제를 진행함
// <button>삭제 에 onClick 이벤트 del 를 연결함
// 삭제 후 rendering이 이루어지도록 조치해야 함
// 상태 변수 word를 이용하는데, Word({ word: w}) 를 실행하여, props로 들어온 값을
// w 로 받아서 사용할 수 있도록 함

// null을 return 하면 아무것도 표현하지 않음
