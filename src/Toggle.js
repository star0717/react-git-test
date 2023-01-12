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


function Toggle() {
const ageBand = ["10s","20s","30s","40s","50s","60s"];
const [selectedAgeBand, setSelectedAgeBand] = useState(ageBand[3]);

  const fruits = ["apple","pair","banana"];
  const [selecteds, setSelecteds] = useState(new Array(fruits.length).fill(true));
  const toggleFruitsSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) => _index === index ? !el : el); 
    setSelecteds(newSelecteds);
  }
  const setSelectedFruits = selecteds.map((el, index) => el ? fruits[index] : el).filter(el => el);


  const [selectedGender, setSelectedGender] = useState('W');
  return (
    <>
     <ul>
      {fruits.map((fruits, index) => (
        <li key={index}>
          <label>
            <input checked={selecteds[index]} type={`checkbox`} onChange={() => toggleFruitsSelected(index)} />{fruits}
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
     <hr />
      <label>
      <input type={`radio`} name="gender" onChange={(e) => setSelectedGender('M')} checked={selectedGender === "M"}/>
      male
      <input type={`radio`} name="gender"  onChange={(e) => setSelectedGender('W')} checked={selectedGender === "W"}/>
      female
     </label> 
{ageBand.map((ageBand) => (
    <label key={ageBand}>
    <input name="ageBand" type={`radio`} onChange={() => selectedAgeBand(ageBand)} checked={ageBand === selectedAgeBand} />
    {ageBand}
  </label>

))}
     <hr />
     <div>Gender : {selectedGender}</div>

      <select onChange={(e) => setSelectedAgeBand(e.target.value)}>
        <option selected disabled>- 나이대역 -</option>
        {ageBand.map(ageBand => <option selected={ageBand == selectedAgeBand} value={ageBand}>{ageBand}</option>)}
      </select>
      
      <div>현재 : {selectedAgeBand}</div>
</>
    
  );
}

export default Toggle;
