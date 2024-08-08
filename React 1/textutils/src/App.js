import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
let name = "Anubhab";
function App() {
  const [mode, setMode] = useState('dark');//wheather dark mode is enable or not
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" mode={mode}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
