import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  };
 
  const DownloadText = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'myFile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText=" "
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);

  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={DownloadText}>
        Download Text
      </button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  );
}
