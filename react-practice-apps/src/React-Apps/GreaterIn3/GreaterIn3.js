import React, { useState } from "react";
import "./GreaterIn3.css";
import { Link } from "react-router-dom";

// Test git

const GreaterIn3 = () => {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [numThree, setNumThree] = useState("");
  const [greaterNum, setGreaterNum] = useState("");

  const reset = (e) => {
    setNumThree("");
    setNumTwo("");
    setNumOne("");
    setGreaterNum("");
  };

  const findGreaterIn3 = (e) => {
    setGreaterNum("");
    console.log("num1", numOne, "num2", numTwo, "num3", numThree);
    if (parseInt(numOne) > parseInt(numTwo)) {
      console.log("triggered here");
      if (parseInt(numOne) > parseInt(numThree)) {
        setGreaterNum(numOne);
      } else {
        setGreaterNum(numThree);
      }
    } else {
      if (parseInt(numTwo) > parseInt(numThree)) {
        setGreaterNum(numTwo);
      } else {
        setGreaterNum(numThree);
      }
    }
  };

  return (
    <div className="greaterin3">
      <div className="greaterin3-header">
        <Link className="link" to="/">
          &lt;Home
        </Link>

        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="greater-ctrl">
        <label htmlFor="">First Number</label>
        <input
          type="text"
          value={numOne}
          onChange={(e) => setNumOne(e.target.value)}
        />
      </div>
      <div className="greater-ctrl">
        <label htmlFor="">Second Number</label>
        <input
          type="text"
          value={numTwo}
          onChange={(e) => setNumTwo(e.target.value)}
        />
      </div>
      <div className="greater-ctrl">
        <label htmlFor="">Third Number</label>
        <input
          type="text"
          value={numThree}
          onChange={(e) => setNumThree(e.target.value)}
        />
      </div>

      <button className="btn btn-greater" onClick={findGreaterIn3}>
        Find greater in 3 number
      </button>

      <div className="greater-found">
        {greaterNum ? `${greaterNum} is greater` : ""}
      </div>
    </div>
  );
};

export default GreaterIn3;
