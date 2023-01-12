import logo from "./logo.svg";
import "./App.css";
import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter";
import Popup from "./Popup";
import ProdList from "./ProdList";
import NoRecord from "./NoRecord";
import FormEx from "./FormEx";
import RefEx from "./RefEx";
import RefModifyEx from "./RefModifyEx";
import Notice from "./Notice";
import React, { useEffect, useRef, useState, useMemo } from "react";

function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
    if (i * i > no) {
      break;
    }

    if (no % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];

  for (let i = 2; i <= max; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

function PrimeNosCount({ max }) {
  const count = useMemo(() => getPrimeNumbersCount(max));

  return (
    <div style={{ border: "10px solid black", padding: "20px" }}>
      1 ~ {max} 사이에 존재하는 소수의 갯수 : {count}
    </div>
  );
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <PrimeNosCount max={100} />
      <hr />
      <PrimeNosCount max={200} />
      <hr />
      <PrimeNosCount max={300} />
      <hr />
      <PrimeNosCount max={100000} />
      <hr />
      <button className="button1" onClick={() => setNo(no + 1)}>
        BTN : {no}
      </button>
    </>
  );
}

export default App;
