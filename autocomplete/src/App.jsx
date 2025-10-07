import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiSelectAutocompletePage from "./component/MultiSelectAutocompletePage"
import AutocompletePortal from "./PortalComponent/AutocompletePortal"
import Input from "./anchorWay/input.jsx"

function App() {
  return (<div
style={{
  height:"200vh",
}}
  ><MultiSelectAutocompletePage />
    <input/><br></br>
    <button></button>
    <AutocompletePortal />
    <Input />
  </div>)
}

export default App
