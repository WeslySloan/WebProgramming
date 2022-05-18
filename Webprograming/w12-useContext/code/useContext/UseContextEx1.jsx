// https://reactjs.org/docs/hooks-reference.html#usecontext

import { useContext } from 'react';
import { createContext } from 'react';

const themes = {
  light: {
    foreground: "#000000", // black
    background: "#eeeeee"  // white gray
  },
  dark: {
    foreground: "#ffffff", // white
    background: "#222222"  // close to black
  }
};

const ThemeContext = createContext(themes.light);

const UseContextEx1 = () => {
  return(
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )}

const Toolbar = () => <div> <ThemedButton /> </div>

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  // const theme = themes.light
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default UseContextEx1

// Call : UseContextEx1 -> Toolbar -> ThemedButton
// Toolbar 와 ThemedButton을 호출할 때 themes를 파라메터로 전송하지 않고,
// context가 필요한 곳에서 해당 Context를 끌어 올려서 사용함.

// Context는 맨 처음 themes.light로 지정했다가, UseCotnextEx1에서 themes.dark로 지정했다.
// ThemedButton에서 Context를 사용할 때는 가장 가까운 곳에서 지정한 themes (즉, themdes.dark) 를 선택함

// themes와 ThemeContext를 컴포넌트 내로 옮기면
// ThemedButton 내 useContext에서 ThemeContext를 인지하지 못함.
