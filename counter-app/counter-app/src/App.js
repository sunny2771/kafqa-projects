import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(6);
  const [color, setColor] = useState("");

  const colorRed = () => {
    if (count >= 1) {
      setColor("red");
    } else {
      setColor("");
    }
  };

  const colorGreen = () => {
    setColor(count > 99 ? "green" : "");
  };

  return (
    <div>
      <div className="main">
        <div
          className="minus"
          onClick={() => {
            setCount(count - 1);
            colorRed();
          }}
        >
          -
        </div>{" "}
        <br />
        <button style={{ background: color }} className="btn">
          {count}
        </button>{" "}
        <br />
        <div
          className="plus"
          onClick={() => {
            setCount(count + 1);
            colorGreen();
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default App;
