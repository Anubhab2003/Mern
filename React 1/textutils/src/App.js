import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import TextForm from "./Components/TextForm";
let name = "Anubhab";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtil" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below"/>
      </div>
    </>
  );
}

export default App;
