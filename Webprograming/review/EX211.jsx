import React from 'react';

export default function Ex211() {
    document.title = "이미지 삽입"
    return (
    <div>
        <h3>이미지 삽입</h3>
    <hr />
        <p> 엘비스 프레슬리의 사진입니다.</p>
    <img src={require ('./Elvis1.jpg')} width="150" height="200"
	 	  alt="Elvis" />
    <img src={require ('media/kitae.jpg')} width="80" height="100"
		 alt="황기태사진없음" />
    <img src={require ('http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif')}
		 alt="사진 주소 변경됨" width="100" height="100" /> 
    </div>
    )
}