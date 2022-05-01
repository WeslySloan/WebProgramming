import {useState} from 'react';
import './WelcomeDialog.css';

const SignUpDialog = () => {
  const[log, setLog] = useState({ login: ''})
  const handleChange = (e) => setLog({login: e.target.value})
  const handleSignUp = () =>  alert(`Welcome aboard, ${log.login}!`) 

  return (
    <Dialog title="Mars Exploration Program" message="How should we refer to you?">
      <input value={log.login} onChange={handleChange} />
      <button onClick={handleSignUp}> Sign Me Up! </button>
    </Dialog>
  )
}

const Dialog = ({ title, message, children}) => 
  <FancyBorder color="blue">
    <h1 className="Dialog-title"> {title} </h1>
    <p className="Dialog-message"> {message} </p>
    {children}
  </FancyBorder>

const FancyBorder = ({ color, children }) => 
  <div className={'FancyBorder FancyBorder-' + color}> {children} </div>

export default SignUpDialog;

// SignupDialog에서는 어떤 정보를 주고 Dialog 에게 처리를 맡기고
// Dialog 는 마찬가지로 좀 더 구체적인 정보를 주고 FancyBorder 에게 일처리를 맡김.
// Generic - Specilazation의 관계로 볼 때, FancyBorder > Dialog > SignUpDialog 
// 의 관계라고 생각할 수 있으며, 이는 OOP 에서 상속의 관계로 설정할 수 있다. 


// 상속은 필요치 않다.
// At Facebook, we use React in thousands of components, 
// and we haven’t found any use cases where we would 
// recommend creating component inheritance hierarchies.

// Props and composition give you all the flexibility 
// you need to customize a component’s look and behavior 
// in an explicit and safe way. 
// Remember that components may accept arbitrary props, 
// including primitive values, React elements, or functions.
