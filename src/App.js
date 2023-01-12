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
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

let SubCallCount = 0;

function Sub({ no1, no2, calculateFunc }) {
  SubCallCount++;
  console.log(`SubCallCount : ${SubCallCount}`);

  return (
    <>
      <div style={{ border: "10px solid red", padding: "10px" }}>
        <div>
          입력 : {no1},{no2}
          <br />
          결과 : {calculateFunc(no1, no2)}
        </div>
      </div>
    </>
  );
}

let AppCallCount = 0;

const MemorisedSub = React.memo(Sub);

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  const calculateFunc = useCallback((a, b) => a + b + no1, [no1]);

  return (
    <>
      <button className="button1" onClick={() => setNo1(no1 + 1)}>
        BTN 1 : {no1}
      </button>
      <button className="button1" onClick={() => setNo2(no2 + 1)}>
        BTN 2 : {no2}
      </button>
      <MemorisedSub no1={10} no2={20} calculateFunc={calculateFunc} />
    </>
  );
}

export default App;
