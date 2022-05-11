// import React, {useContext} from 'react';

const UseContextPass = () => {
  const themes = {
    light: {
      foreground: "#000000", // black
      background: "#eeeeee"  // white gray
    },
    dark: {
      foreground: "#ffffff",  // white
      background: "#222222"   // close to black
    }
  };
  return (
    <Toolbar  themes={themes.light} />
  )
}

const Toolbar = ({ themes }) => <div> <ThemedButton  themes={themes} /> </div>

const ThemedButton = ({ themes }) => {
  // const theme = useContext(ThemeContext);
  return (
    <button style={{ background: themes.background, color: themes.foreground }}>
      I am styled by passing theme!
    </button>
  );
}

export default UseContextPass;