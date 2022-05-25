import './style.css'

// 외부에서 들어오는 데이타
const ImageMap = () => {
  const imgData = { images: ['apple', 'banana', 'beach', 'puppy', 'beach2'] }

  const myImage = imgData.images.map((e, i) => (
    <img key={i} src={process.env.PUBLIC_URL + '/img/' + e + '.png'} />
  ))

  return <div> {myImage} </div>
}

export default ImageMap

// image 파일을 map 함수로 처리함
// imgData의 내용 만을 조절함으로써 dynamically 처리할 수 있음
