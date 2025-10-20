import { useState , useEffect} from 'react'
import StickyTable from "./stickyTable/StickyTable"

function App() {

  useEffect(()=>{
    // document.documentElement.style.scroll = "none"
  },[])

  return (
    <div
      style={{
        width:"100%",
        height:"99vh",
        overflowX:"auto",
        overflowY:"auto",
      }}
    >
      <div
        style={{
          height:"400px",
          width:"100%",
        }}
      >

      </div>
      <StickyTable />
    </div>
  )
}

export default App
