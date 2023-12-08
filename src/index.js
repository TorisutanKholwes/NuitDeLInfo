import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.scss";
import App from './App'

createRoot(document.getElementById('root')).render(
<App />
  )

document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault();
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
  }
})