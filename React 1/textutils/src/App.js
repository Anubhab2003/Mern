import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
let name = "Anubhab";
function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not


  const [alert, setalert]=useState(null);
  const setAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }
    ,3000);    
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      setAlert("Dark mode has been enabled","success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" mode={mode}
      toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm setAlert={setAlert} heading="Enter text to analyse below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
