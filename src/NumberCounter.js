import React, { useState } from "react";
import logo from "./logo.svg";

function NumberCounter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv = (
    <>
      <hr />
      <span>짝수입니다</span>
    </>
  );
  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      {noIsEvenDiv}
    </>
  );
}

export default NumberCounter;
