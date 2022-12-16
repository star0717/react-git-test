import React, { useState } from "react";

function Popup() {
  const border = "10px solid red";
  const [popupVisible, setPopupVisivle] = useState(true);
  return (
    <>
      {popupVisible && (
        <button
          className="btn btn-outline"
          onClick={() => setPopupVisivle(false)}
        >
          close
        </button>
      )}
      {popupVisible || (
        <button
          className="btn btn-outline"
          onClick={() => setPopupVisivle(true)}
        >
          open
        </button>
      )}
      <hr />
      {popupVisible && <div style={{ width: 100, height: 100, border }}></div>}
    </>
  );
}

export default Popup;
