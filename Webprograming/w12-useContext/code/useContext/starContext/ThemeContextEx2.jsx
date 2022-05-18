import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext(null)
const UserContext = createContext(null)

const ThemeContextEx2 = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page/>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

const Page = () => {
  return (
    <div>
      <Header />
      <Content  />
      <Footer />
    </div>
  )
}

const Header = () => {
  const { isDark } = useContext(ThemeContext)
  const user = useContext(UserContext)
  return(
    <header 
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark? 'white' : 'black'
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  )
}

const Content = () => {
  const { isDark } = useContext(ThemeContext)
  const user = useContext(UserContext)
  return (
    <div 
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>{user}님, 좋은 하루 되세요</p>
    </div>
  )
}

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const toggleTheme = () => setIsDark(!isDark)
  return(
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? 'black' : 'lightgray'}}
    >
      <button className="button" onClick={toggleTheme}> Dark Mode </button>
    </footer>
  )
}

export default ThemeContextEx2;

// ThemeContext 확장
// 원래 한 개의 ThemeContext를 사용하고 있었는데, UserContext를 추가함

