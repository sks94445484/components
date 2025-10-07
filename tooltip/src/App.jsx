import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from "./component/Page"
import Page2 from "./autoComponent/Page"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Page1 />
     <Page2 />
    </>
  )
}

export default App
