
const ArrayKey = () => {

  const arr = [ {id: 1, name: 'Kim'}, {id: 2, name: 'Lee'}, {id: 3, name: 'Park'}]
  const lis = arr.map(ele => <li key={ele.id}> {ele.name} </li>)
  const arr2 = [<li key={1}>{10+10}</li>, <li key={2}>{20+20}</li>, <li key={3}>{30+30} </li> ]

  return (
    <div>
      <h3> key-jsx로 구성된 배열의 rendering </h3>
      {arr2}             {/* ul 로서 동작 */}
      <ol> {lis} </ol>   
      <ol>               {/* 번거로운 표현 방법. 사용 금지 */}
        {lis[0]}
        {lis[1]}
        {lis[2]}
      </ol>
    </div>
  );
};

export default ArrayKey;

// arr2는 key를 갖는 jsx들로 구성된 배열로서,
// 원소들 iteration 없이 그 자체로 rendering 에 이용됨. <div> {arr2} </div> 
