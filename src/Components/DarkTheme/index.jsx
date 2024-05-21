import useLocalStorage from "./useLocalStorage";

import './styles.css';

export default function DarkTheme() {
  const [ theme, setTheme ] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  console.log(theme)

  return (
    <div className="dark-mode" data-theme={theme}>
      <div className="dark-mode-container">
        <h1>Dark Mode</h1>
        <h3>#100daysofcode Day 14</h3>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}