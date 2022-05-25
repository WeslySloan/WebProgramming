// https://www.youtube.com/watch?v=Is17U4DS8Rk

import './style.css'
import Elvis from './Elvis1.jpg'
import kathmandu from './kathmandu.webp'
import einstein from './einstein.jpeg'

const Style1 = () => {
  return (
    <div>
      <h2>Images</h2>
      <img style={{ border: 'solid 4px #ff9900' }} src={Elvis} />
      <img
        style={{ border: 'solid 4px #ff9900', borderRadius: '50%' }}
        src={kathmandu}
        alt=''
      />
      <img
        style={{ border: 'solid 4px #ff9900', borderRadius: '50%' }}
        src={einstein}
        alt=''
      />
    </div>
  )
}

export default Style1

// Style 사용법
// 1. css 파일을 만들고 이들을 import 함.
// 2. 또한 <img> 태그 내에 style 값을 지정할 수도 있음.
// 3. img 도 마찬가지로 import한 후 사용 가능함
