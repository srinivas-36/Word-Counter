import React from "react";
import { useState, useEffect } from "react";
import "../components/css/text.css";
export default function TextArea() {
  const heading = {
    width: "100%",
    backgroundColor: "/F1F0F7",
  };
  const title = {
    width: "100%",
    textAlign: "center",
    padding: "11px 0px",
    fontSize: "41px",
  };
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // array of words
    const words = text.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleclear = () => {
    let txt = "";
    setText(txt);
  };
  return (
    <>
      <div style={heading}>
        <h1 style={title}>Word Counter - React App</h1>
      </div>
      <div className="container my-3">
        <h1>
          {wordCount > 0
            ? `${wordCount} words and ${charCount} characters`
            : "Enter the text Below"}
        </h1>
        <div className="container my-4 textarea">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="mybox"
            rows="10"
            placeholder="Enter the Text here"
          ></textarea>
        </div>

        <div className="container">
          <button type="button" class="btn btn-primary" onClick={handleclear}>
            Clear Text
          </button>
        </div>
        <div className="container my-3">
          <h2>Text Preview</h2>
          <p>
            {wordCount} words and {charCount} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <h2>Text Summary</h2>
          <p>{text.length > 0 ? text : "enter the text above"}</p>
        </div>
      </div>
    </>
  );
}
