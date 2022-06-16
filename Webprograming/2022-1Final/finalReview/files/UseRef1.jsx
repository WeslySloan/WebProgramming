import { useRef } from  'react';

const UseRef1 = () => <TextInputWithFocusButton />

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);

  // `current` points to the mounted text input element
  const onButtonClick = () => inputEl.current.focus();
  
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default UseRef1;

