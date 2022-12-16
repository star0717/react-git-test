import logo from "./logo.svg";
import "./App.css";
import StopWatch from "./StopWatch";
import NumberCounter from "./NumberCounter";
import Popup from "./Popup";
import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
      {/* <StopWatch /> */}
      {/* <NumberCounter /> */}
      {/* <Popup /> */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <ProductListItem
          imgNo={201}
          name={"MAC BOOK AIR"}
          productPriceFormated={"1, 234, 567"}
        />
        <ProductListItem
          imgNo={1}
          name={"MAC BOOK PRO"}
          productPriceFormated={"2, 345, 678"}
        />
        <ProductListItem
          imgNo={2}
          name={"MAC BOOK PLUS"}
          productPriceFormated={"3, 456, 789"}
        />
      </div>
    </>
  );
}

export default App;
