import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
let name = "Anubhab";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
