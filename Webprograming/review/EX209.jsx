import React from 'react';

export default function Ex209() {
    document.title = "텍스트 꾸미기"
    return (
    <div>
        <h3>텍스트 꾸미기</h3>
        <hr />
        <p> 
	        <b>진하게</b><br />
	        <strong>중요한</strong><br />
	        <em>강조</em><br />
	        <i>이탤릭으로 강조</i><br />
	        <b><i>진하게 이탤릭으로 강조</i></b><br />
	        보통 문자 <small>한 단계 작은 문자</small><br />
	        <del>삭제</del><br />
	        <ins>추가</ins><br />
	        보통문자의 <sup>윗첨자</sup><br />
	        보통문자의 <sub>아래첨자</sub><br />
	        <mark>하이라이팅</mark><br />
        </p>
      </div>
    )
}