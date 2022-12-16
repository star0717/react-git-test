import React, { useState } from "react";

function ProductListItem({ imgNo, name: productName, productPriceFormated }) {
  // props 방법1
  // const { imgNo, name, productPriceFormated } = props;
  // const productName = name;

  // props 방법2
  //const { imgNo, name: productName, productPriceFormated } = props;
  return (
    <>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#454545",
          }}
        >
          {productName}
        </div>
        <div style={{ textAlign: "center" }}>{productPriceFormated}</div>
      </div>
    </>
  );
}

export default ProductListItem;
