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


function App() {
  const fruits = ["apple","pair","banana"];
  const [selecteds, setSelecteds] = useState(new Array(fruits.length).fill(true));

  const toggleFruitsSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) => _index === index ? !el : el) 
  }

  const setSelectedFruits = selecteds.map((el, index) => el ? fruits[index] : el)
  return (
    <>
     <ul>
      {fruits.map((fruits, index) => (
        <li key={index}>
          <label>
            <input checked={selecteds[index]} type={`checkbox`} onChange={() => toggleFruitsSelected} />{fruits}
          </label>
        </li>
      ))}
      
     </ul>
     <hr />
     <div>
    선택상태 : {selecteds.join(",")}
    <hr />
    선택된 과일 : {selecteds.join(",")}
     </div>
    </>
  );
}

export default App;
