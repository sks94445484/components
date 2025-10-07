import React from 'react'
import Tooltip from './Tooltip'

const Page = () => {
  return (
    <div>
        <div style={{ padding: "100px", textAlign: "center" }}>
            <Tooltip text="This is a top tooltip 👆" position="top">
                <button>Hover me (Top)</button>
            </Tooltip>

            <br /><br />

            <Tooltip text="This is a right tooltip 👉" position="right">
                <button>Hover me (Right)</button>
            </Tooltip> hello all I am fine......................hello

            <br /><br />

            <Tooltip text="This is a bottom tooltip 👇" position="bottom">
                <button>Hover me (Bottom)</button>
            </Tooltip>

            <br /><br />

            <Tooltip text="This is a left tooltip 👈" position="left">
                <button>Hover me (Left)</button>
            </Tooltip>
        </div>
    </div>
  )
}

export default Page