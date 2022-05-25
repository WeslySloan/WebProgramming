// https://www.youtube.com/watch?v=Is17U4DS8Rk

import './style.scss'
import Elvis from './Elvis1.jpg'
import kathmandu from './kathmandu.webp'
import einstein from './einstein.jpeg'



const StyleSass = () => {
  return (
    <div className="mybuttons">
      <h2>Images</h2>
      <img src={Elvis} />
      <img src={kathmandu} alt='' />
      <img src={einstein} alt='' />
    </div>
  )
}

export default StyleSass

// SaSS 패키지 install:
// $ npm install --save-dev node-sass
// 설치 후, package.json : 
// "devDependencies" : {"node-sass": "^7.0.1"} 버전

// Sass 파일 : style.scss

