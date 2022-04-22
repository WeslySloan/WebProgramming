
const NumberList2 = () => <NumberListKey numbers={[10,20,30,40,50]} />

const NumberListKey = ({ numbers }) => numbers.map(
  (number) => <ListItem key={number.toString()} value={number} />
   // key는 배열 안에서 표현되어야 함.
   // ListItem 컴포넌트는 1개의 props를 갖지만, key가 추가적으로 표현되어 2개 처럼 보임.
   // 이 key 값은 컴포넌트에 패스되지 않음.
)

const ListItem= ({ value }) => <li> {value} </li>
// 호출되는 곳에서는 key를 specify할 필요가 없다.

export default NumberList2;

// key는 React가 어떤 <li> 가 변화, 추가, 제거가 발생했는 지를 파악할 때 도움을 줌.
// key는 배열 안에서 확실히 identify 될 수 있는 값이 각 원소에게 주어져야 함.
// 배열의 index를 key 값으로 사용할 수 있다.  numbers.map((number, index) => ...)
// 그러나 원소들의 순서가 바뀔 경우가 있으므로 가급적 사용하지 말거나, 주의해서 사용해야 함.
// key 값으로서 수에 대한 스트링 값을 지정하는 것이 좋은 방법 중 하나이다.
// new Date() 이 key 값으로 사용될 수 있음.

