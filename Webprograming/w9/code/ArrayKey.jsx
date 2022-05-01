
const ArrayKey = () => {

  const arr = [ {id: 1, name: 'Kim'}, {id: 2, name: 'Lee'}, {id: 3, name: 'Park'}]
  const lis = arr.map(ele => <li key={ele.id}> {ele.name} </li>)
  const arr2 = [<li key={1}>{10+10}</li>, <li key={2}>{20+20}</li>, <li key={3}>{30+30} </li> ]

  return (
    <div>
      <h3> Rendering arrays with key-jsx </h3>
      {arr2}   
      <ol> {lis} </ol>   
      <ol>               {/* Verbose. Not recommended. 추천하지 않음 */}
        {lis[0]}
        {lis[1]}
        {lis[2]}
      </ol>
    </div>
  );
};

export default ArrayKey;

// arr2는 key를 갖는 jsx들로 구성된 배열로서,
// No iteration. 원소들 iteration 없이 그 자체로 rendering 에 이용됨. 
// <div> {arr2} </div> 
