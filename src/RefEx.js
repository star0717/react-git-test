import React, { useState, useRef } from "react";

let RefCallCount = 0;

function RefEx() {
  console.clear();
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index !== index);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록된 숫자</button>
      </form>

      <hr />
      <h1>기록된 숫자</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>
            <span style={{ width: 70, display: "inline-block" }}>{el}</span>
            <span style={{ width: 70, display: "inline-block" }}>{index}</span>
            <button onClick={() => removeNo(index)}>DELETE</button>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default RefEx;
