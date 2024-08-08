import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
let name = "Anubhab";
function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" mode={mode}
      toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
