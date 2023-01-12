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

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div>
        <button className="btn-toggle-theme" onClick={() => setIsDark(!isDark)}>
          테마토글
        </button>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        tempore similique quaerat, rerum sunt alias repellat aliquid! Nesciunt
        fugit maiores quia obcaecati sed! A veniam eos earum porro eaque
        commodi?
      </div>

      <h1 className="color-primary">하하 호호</h1>
    </>
  );
}

export default App;
