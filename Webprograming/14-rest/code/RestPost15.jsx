// 코딩앙마:  React JS #15
// Rest API - Put & Delete

import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const RestPost15 = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
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
        <Link to='/create_word' className='link'>
          단어 추가
        </Link>
        <Link to='/create_day' className='link'>
          Day 추가
        </Link>
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

const CreateWord = () => {
  const days = useFetch('http://localhost:3001/days')
  // const history = useHistory()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    // console.log(engRef.current.value)
    // console.log(korRef.current.value)
    // console.log(dayRef.current.value)

    fetch(`http://localhost:3001/words/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료되었습니다')
        // history.push(`/day/${dayRef.current.value}`)
        navigate(`/day/${dayRef.current.value}`)
      }
    })
  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>Eng</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <select ref={dayRef}>
          {days.map((d) => (
            <option key={d.id} value={d.day}>
              {d.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  )
}

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days')
  const navigate = useNavigate()

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다')
        navigate(`/`)
      }
    })
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}
export default RestPost15

// Post(단어 및 Day 추가):
// CreateWord 컴포넌트 만듦

// "저장"을 클릭하면 re-refresh 되는 것은 <form> 을 사용하기 떄문
// 이것을 onSubmit으로 연결함

// input 창에 값을 체크하기 위해 useRef를 이용함 (DOM 값을 읽음)
// 입력 창에 값을 입력 - "저장 후" Ref 변수의 값을 콘솔에서 확인

// useNavigate :
// 저장 후 바로 해당 날짜 페이지로 이동할 수 있도록 함

// react-router v6에서 useHistory 네이밍 변화.
// useHistory -> useNavigate
// history.push(`/day/${dayRef.current.value}`) -> navigate(`/day/${dayRef.current.value}`)

// 날짜 늘리기
