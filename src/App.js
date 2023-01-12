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
import React, { useEffect, useRef, useState } from "react";

let AppCallCount = 0;
let SubCallCount = 0;

function Sub({ appNo }) {
  SubCallCount++;
  console.log(`Sub = ${SubCallCount}`);
  const [no, setNo] = useState(0);
  const [no2, setNo2] = useState(0);

  useEffect(() => {
    console.log(`effect1 : 단 한 번 실행`);
  }, []);

  useEffect(() => {
    console.log(`effect2 : 부모(aPP)의 appNo가 바뀔 때 마다 실행`);
  }, [appNo]);

  useEffect(() => {
    console.log(`effect3 : 나(sub)의 no가 바뀔 때 마다 실행`);
  }, [no]);

  useEffect(() => {
    console.log(`effect4 : appNo or no가 바뀔 때 마다 실행`);
  }, [appNo, no]);

  useEffect(() => {
    console.log(`effect5 : 매번 실행`);
  });

  return (
    <>
      <div style={{ color: "#000" }}>App no : {appNo} </div>
      <button onClick={() => setNo(no + 1)}>BTN : {no}</button>
      <button onClick={() => setNo2(no2 + 1)}>BTN2 : {no2}</button>
    </>
  );
}
function App() {
  AppCallCount++;
  console.log(`App = ${AppCallCount}`);
  const [no, setNo] = useState(0);

  // const inputAgeRef = useRef(null);
  // const useNameRef = useRef(null);
  // useEffect(() => {
  //   AppCallCount++;
  //   console.log(`App이 ${AppCallCount} 번 실행됨`);
  // }, []);
  // [] => 의존성 배열 / 넣지 않으면 무한 리랜더링 됨

  // const [no, setNo] = useState(0);
  return (
    <>
      {/* <input ref={useNameRef} type="text" placeholder="name" />
      <input ref={inputAgeRef} type="number" placeholder="age" />
      <button
        onClick={() => {
          setNo(no + 1);
          inputAgeRef.current.focus();
        }}
      >
        증가 : {no}
      </button> */}

      <button onClick={() => setNo(no + 1)}>BTN : {no}</button>

      <hr />
      <Sub appNo={no} />
    </>
  );
}

export default App;
