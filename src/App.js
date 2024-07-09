import React, { useState } from "react";
import "./pass.css";
import { UC, LC, NC, SC } from "./data/passchar.js";
function App() {
  // for check box make state
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [passwordlen, Setpasswordlen] = useState(10);
  const [fpass, Setpass] = useState("");
  // make function for copy text
  const copypass = () => {
    navigator.clipboard.writeText(fpass);
  };
  //make function
  const createPassword = () => {
    //work here for password generate
    let charSet = " ";
    let finalpass = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC; //if 1st&2ndcheck then add both so on..
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      //how much password generate =passwordlen
      for (let i = 0; i < passwordlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));
        Setpass(finalpass);
      }
    } else {
      alert("please ckecked atleast one box.....");
    }
  };

  return (
    <>
      <div className="passwordBox">
        <h1>Password generator</h1>

        <div className="passwordBoxin">
          {/* ...her fpass print... */}
          <input type="text" value={fpass} readOnly />
          <button onClick={copypass}> Copy</button>
        </div>

        <div className="plength">
          <label>Password length:</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordlen}
            onChange={(event) => Setpasswordlen(event.target.value)}
          />
        </div>
        <div className="passlength">
          <label>Include Uppercase letter:</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Lowercase letter:</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Include symbol:</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <div className="passlength">
          <label>Include number:</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <button className="btn" onClick={createPassword}>
          <b>Generate Password</b>
        </button>
      </div>
    </>
  );
}

export default App;
