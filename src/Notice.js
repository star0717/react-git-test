import React, { useState } from "react";
import classnames from "https://cdn.skypack.dev/classnames";

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [workDone, setWorkDone] = useState(false);

  if (workDone == false) {
    setTimeout(function () {
      setVisible(true);
      console.log(`ㅎㅇ`);
    }, 1000);
    setTimeout(function () {
      setVisible(false);
      console.log(`ㅂㅇ`);
    }, 3000);
    setWorkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed right-[10px] transition-all",
        { "top-[-60px]": !visible },
        { "top-[10px]": visible }
      )}
    >
      {children}
    </div>
  );
}

function Alert({ color: color_, children }) {
  const color = color_ ?? "red";
  return (
    <div className="alert alert-info shadow-lg">
      <div>
        <div className={`text-[${color}]`}>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <NotifyOnce>
        <Alert>aaa</Alert>
      </NotifyOnce>
      <br />
      <div>messagemessagemessagemessage</div>
    </>
  );
}

export default Notice;
