// https://www.youtube.com/watch?v=Is17U4DS8Rk

import './style.css'
import Elvis from './Elvis1.jpg'
import kathmandu from './kathmandu.webp'
import einstein from './einstein.jpeg'

const button1 = { border: 'solid 4px #ff9900' }
const button2 = { border: 'solid 4px #ff9900', borderRadius: '50%' }
const box = { backgroundColor: '#ccc' }
const h2 = { fontSize: '4em' }

const Style2 = () => {
  return (
    <div style={box}>
      <h2 style={h2}>Images</h2>
      <img style={button1} src={Elvis} />
      <img style={button2} src={kathmandu} alt='' />
      <img style={button2} src={einstein} alt='' />
    </div>
  )
}

export default Style2

// Style : 로컬 변수에 값을 지정하고 사용함
