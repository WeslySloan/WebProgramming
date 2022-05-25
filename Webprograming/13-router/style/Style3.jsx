// https://www.youtube.com/watch?v=Is17U4DS8Rk

import './style.css'
import Elvis from './Elvis1.jpg'
import kathmandu from './kathmandu.webp'
import einstein from './einstein.jpeg'

const styles = {
  button1: { border: 'solid 4px #ff9900' },
  button2: { border: 'solid 4px #ff9900', borderRadius: '50%' },
  box: { backgroundColor: '#ccc' },
  h2: { fontSize: '4em' },
}

const Style3 = () => {
  return (
    <div style={styles.box}>
      <h2 style={styles.h2}>Images</h2>
      <img style={styles.button1} src={Elvis} />
      <img style={styles.button2} src={kathmandu} alt='' />
      <img style={styles.button2} src={einstein} alt='' />
    </div>
  )
}

export default Style3

// Style : 모든 스티일을 하나의 객체 내에 정리함
