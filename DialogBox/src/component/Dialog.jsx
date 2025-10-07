import React, { useState , useEffect} from "react";
import "./Dialog.css"; // CSS file for styles

const DialogBox = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen){
//     // const start = new Date()
//     // // 1 sec = 1000 millieseconds
//     // while( new Date() - start < 400){
//     //     //
//     // }
//      return null;
//     }
const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    onClose();
    // Wait for fadeOut animation before unmount
    setTimeout(() => {
      setClosing(false);
    //   onClose();
    }, 250); // match animation duration // always keep it low
  };

  if (!isOpen && !closing) return null;


  return (
    <div className="dialog-overlay">
      <div className={`dialog-box ${isOpen? "open" : "close"}`}>
        <h2>{title}</h2>
        <div className="dialog-content">{children}</div>
        <div className="dialog-actions">
          <button className="btn" onClick={
            handleClose
            // onClose
            }>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Dialog() {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    // For to remove the scrollbar while displaying pop up
    if(open){
        document.body.classList.add("overflow-hidden")
    }
    return ()=>{
        document.body.classList.remove("overflow-hidden")
    }
  },[open])


  return (
    <div 
    className="app"
    >
      <button className="btn open-btn" onClick={() => setOpen(true)}>
        Open Dialog
      </button>

      <DialogBox isOpen={open} onClose={() => setOpen(false)} title="Hello 👋">
        <p>This is a plain React dialog with no library.</p>
      </DialogBox>
    </div>
  );
}
