import React, { useState, useRef } from "react";

function RefEx() {
  const formInputNoRef = useRef(null);
  const [no, setNo] = useState("");
  const notice = () => {
    formInputNoRef.current.focus();
    if (!no) {
      alert("숫자를 입력해주세요.");
      return;
    }

    alert(`${no}`);
    setNo("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef}
          type="text"
          placeholder="number"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        />
        <button>BUTTON</button>
      </form>
    </>
  );
}

export default RefEx;
