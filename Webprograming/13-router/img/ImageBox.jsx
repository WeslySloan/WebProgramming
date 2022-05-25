import './style.css';

const ImageBox = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/img/einstein.jpeg'} />
      <img src={process.env.PUBLIC_URL + '/img/elvis.jpg'} />
    </div>
  );
};

export default ImageBox;

// 이미지를 import하는 경우는, 한 번 import한 다음 잘 바꾸지 않을 경우.
// 이미지가 많거나 이미지가 자주 바뀌는 경우는 public/img 폴더 내에 파일을 저장함

// public 폴더 내의 이미지 파일은 그 수나 이름이 상관없이 사용할 수 있다.
// process.env.PUBLIC_URL : 폴더 public 을 표현하는 syntax
// import 할 필요 없이 시스템이 그 위치를 알 수 있음

