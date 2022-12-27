import React from "react";
import ProdListItem from "./ProdListItem";

function ProdList({ className }) {
  return (
    <>
      <div className={className}>
        <ul className=" mx-auto flex gap-[10px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 ">
          <li>
            <ProdListItem
              imgNo={201}
              name={"PRODUCT 1"}
              productPriceFormated={"1, 234, 567"}
            />
          </li>
          <li>
            <ProdListItem
              imgNo={1}
              name={"PRODUCT 2"}
              productPriceFormated={"2, 345, 678"}
            />
          </li>
          <li>
            <ProdListItem
              imgNo={2}
              name={"PRODUCT 3"}
              productPriceFormated={"3, 456, 789"}
            />
          </li>
          <li>
            <ProdListItem
              imgNo={201}
              name={"PRODUCT 1"}
              productPriceFormated={"1, 234, 567"}
            />
          </li>
          <li>
            <ProdListItem
              imgNo={1}
              name={"PRODUCT 2"}
              productPriceFormated={"2, 345, 678"}
            />
          </li>
          <li>
            <ProdListItem
              imgNo={2}
              name={"PRODUCT 3"}
              productPriceFormated={"3, 456, 789"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProdList;
