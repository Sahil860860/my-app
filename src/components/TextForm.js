import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newtext = text.toUpperCase();

    setText(newtext);
    // props.showAlert("Text has been changed to Uppercase", "success");
  };
  const handleLoClick = () => {
    const newtext = text.toLowerCase();

    setText(newtext);
    // props.showAlert("Text has been changed to Lowercase", "success");
  };

  const handleOnChange = (event) => {
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
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p> Time taken: {text.split(" ").length * (1 / 125)}</p>
      </div>
    </>
  );
}
