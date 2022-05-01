import './WelcomeDialog.css'

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">   Welcome  </h1>
      <p className="Dialog-message">   Thank you for visiting our spacecraft! </p>
    </FancyBorder>
  );
};

const FancyBorder = ({ color, children })  => {
  return (
    <div className={'FancyBorder FancyBorder-' + color}>
      {children}
    </div>
  );
}


export default WelcomeDialog;

// 코드 재사용을 위해서 상속 대신 합성(composition) 방식을 사용할 것.
// children prop :  임의의 children element를 직접 패스함 
// 여기서는 h1과 p가 children. 이들을  FancyBorder에서 chilren으로 받음. 
// FancyBorder 측에서는 어떤 내용이 올 지 모르는 상황에서 이들을 children 으로 처리함


