import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Calc.css";

const Calc = () => {
  const [curState, setCurState] = useState("");
  const [preState, setPreState] = useState("");
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState("0");
  const [total, setTotal] = useState(false);

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const backSpace = (e) => {
    if (!curState || curState.length === 1) return;

    setCurState(curState.slice(0, -1));
  };

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) setPreState("");

    if (curState) {
      setCurState((pre) => pre + e.target.innerText);
    } else {
      setCurState(e.target.innerText);
    }
    setTotal(false);
  };

  const operatorInput = (e) => {
    if (!curState) return;
    setTotal(false);
    setOperator(e.target.innerText);
    if (preState) {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (curState === "" || preState === "") return;
    let cal;
    switch (operator) {
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      default:
        break;
    }
    setCurState("");
    setPreState(cal);
    setTotal(true);
  };

  const percent = (e) => {
    if (preState) {
      setCurState(String(input * 0.01) / preState);
    } else {
      setCurState(String(input * 0.01));
    }
  };

  const plusMinus = (e) => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const reset = (e) => {
    setCurState("");
    setPreState("");
    setInput("0");
  };

  return (
    <div className="calc-wrapper">
      <h1>Calculator-App</h1>
      <Link to="/">&lt;Home</Link>
      <div className="calc-wrapper main">
        <div className="calc-wrapper-input">
          {input !== "" || input === "0" ? input : preState}
        </div>
        <div className="calc-inputNum" onClick={percent}>
          %
        </div>
        <div className="calc-inputNum" onClick={reset}>
          CE
        </div>
        <div className="calc-inputNum" onClick={reset}>
          C
        </div>
        <div className="calc-inputNum" onClick={backSpace}>
          x
        </div>

        <div className="calc-inputNum" onClick={inputNum}>
          7
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          8
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          9
        </div>
        <div className="calc-inputNum" onClick={operatorInput}>
          X
        </div>

        <div className="calc-inputNum" onClick={inputNum}>
          4
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          5
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          6
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          -
        </div>

        <div className="calc-inputNum" onClick={inputNum}>
          1
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          2
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          3
        </div>
        <div className="calc-inputNum" onClick={operatorInput}>
          +
        </div>

        <div className="calc-inputNum" onClick={plusMinus}>
          +/-
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          0
        </div>
        <div className="calc-inputNum" onClick={inputNum}>
          .
        </div>
        <div className="calc-inputNum" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calc;
