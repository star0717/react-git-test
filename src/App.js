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

function App() {
  const inputAgeRef = useRef(null);
  const useNameRef = useRef(null);
  useEffect(() => {
    AppCallCount++;
    console.log(`App이 ${AppCallCount} 번 실행됨`);
  }, []);
  // [] => 의존성 배열 / 넣지 않으면 무한 리랜더링 됨

  const [no, setNo] = useState(0);
  return (
    <>
      <input ref={useNameRef} type="text" placeholder="name" />
      <input ref={inputAgeRef} type="number" placeholder="age" />
      <button
        onClick={() => {
          setNo(no + 1);
          inputAgeRef.current.focus();
        }}
      >
        증가 : {no}
      </button>
    </>
  );
}

export default App;
