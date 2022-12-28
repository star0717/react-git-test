import React, { useState } from "react";

function NoRecord() {
  const [no, setNo] = useState(null);
  const [recordNos, setRecordNos] = useState([]);

  //   const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  //   setTimeout(() => {
  //     setArr([...arr, arr.length + 1]);
  //   }, 1000);

  const saveNo = (e) => {
    e.preventDefault();
    //prevent = 막는다 defailt = 기본 => 즉 이동을 막는다 ex)스크롤, 폼 전송,발송 등
    if (no === "") {
      alert("숫자를 입력해주세요");
      return;
    }
    setRecordNos([...recordNos, no]);
    setNo("");
  };

  const li = recordNos.map((el, index) => <li key={{ index }}>- {el}</li>);
  return (
    <>
      {/* {arr.join(",")} */}
      <h1>number record</h1>
      <form>
        <input
          onChange={(e) => setNo(e.target.valueAsNumber)}
          type="number"
          value={no}
          className="input w-full max-w-xs"
        />
        <button type="submit" onClick={saveNo} className="btn btn-outline">
          RECORD
        </button>
      </form>
      <hr />
      <h1>v1</h1>
      Number:{recordNos.join(",")}
      <hr />
      <h1>v2</h1>
      Number:<ul>{li}</ul>
      {/* test */}
    </>
  );
}

export default NoRecord;
