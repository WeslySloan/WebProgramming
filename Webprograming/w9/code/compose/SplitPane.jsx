import './SplitPane.css'

const SplitPane = () =>  <SplitPaneMain left={<Contacts />} right={<Chat />} />

const SplitPaneMain = ({ left, right }) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {left}
      </div>
      <div className="SplitPane-right">
        {right}
      </div>
    </div>
  );
}

const Contacts = () =>  <div className="Contacts" />
const Chat = () =>  <div className="Chat" />


export default SplitPane;

// Multiple "holes" 
// 컴포넌트가 파라메터의 값으로 전달되고 있음. 
// 어차피 JSX는 객체이므로, 이는 객체를 전달하는 것과 같음
// 이것은 마치 어떤 장소에 값을 전달하는 "slot" 의 역할을 함.
// chilren이 한 컴포넌트의 모든 chilren을 전달하는 것에 비해서
// slot은 필요한 일부분만을 전달할 수 있음. 좀 더 일반화된 형태.
