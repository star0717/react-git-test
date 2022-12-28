import logo from "./logo.svg";
import "./App.css";
import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter";
import Popup from "./Popup";
import ProdList from "./ProdList";
import NoRecord from "./NoRecord";
import { useState } from "react";

// function Box(props) {
//   const className = props.className;
//   return (
//     <div
//       style={{ width: 100, height: 100, backgroundColor: "red" }}
//       className={className}
//     ></div>
//   );
// }

// function Sub({ setAges, ages }) {
//   const onClick = () => {
//     setAges((ages) => [...ages, 10, 20, 30]);
//     setAges((ages) => [...ages, 40, 50, 60]);
//     setAges((ages) => [...ages]);
//   };
//   return (
//     <>
//       <div style={{ border: "10px solid red" }}>
//         <button onClick={onClick}>현재나이 : {ages}</button>
//       </div>
//     </>
//   );
// }

function App() {
  // const fun1 = () => {
  //   console.log("fun1");
  // };
  // const fun2 = (a, b) => {
  //   console.log(`fun2 : ${a},${b}`);
  // };
  // const [ages, setAges] = useState([]);

  return (
    <>
      {/* <StopWatch /> */}
      {/* <NumberCounter /> */}
      {/* <Popup /> */}
      {/* <ProdList className="container mx-auto" /> */}
      {/* <NoRecord /> */}

      {/* <Box />
      <br />
      <Box className="border" /> */}

      {/* <button onClick={() => fun1()}>1</button>
      <br />
      <button onClick={() => fun2(1, 2)}>2</button> */}

      {/* <Sub setAges={setAges} ages={ages} />
      <div>나이들 : {ages.join(",")} </div> */}
    </>
  );
}

export default App;
