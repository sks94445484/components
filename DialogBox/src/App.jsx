import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dialog from "./component/Dialog"

function App() {

  return (
    <>
     <Dialog />
     <div style={{
      height:"250px",
      // width:"500px",
      width:"100px",
      border: "1px solid black",
      overflow: "auto", //hides content, but shows scrollbars only when needed.
      // overflow: "hidden", //content is cut off, no scroll.
      // overflow: "scroll", //always shows scrollbars, even if not needed. // not needed
      // overflowX: "auto",  /* enable horizontal scroll */
      //  overflowY: "hidden", /* prevent vertical */
      // whiteSpace:"normal",
      wordWrap:"break-word", // for to avoid horizontal scolling, if word exceeds
      //or
      // overflowWrap:"break-word",

     }}>
      {/* abc */}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores voluptatum odio eum beatae enim, consequuntur iusto eveniet odit aspernatur sequi neque autem cumque vero esse praesentium illum expedita soluta!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores voluptatum odio eum beatae enim, consequuntur iusto eveniet odit aspernatur sequi neque autem cumque vero esse praesentium illum expedita soluta!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores voluptatum odio eum beatae enim, consequuntur iusto eveniet odit aspernatur sequi neque autem cumque vero esse praesentium illum expedita soluta!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores voluptatum odio eum beatae enim, consequuntur iusto eveniet odit aspernatur sequi neque autem cumque vero esse praesentium illum expedita soluta!
     </div>
    </>
  )
}

export default App
