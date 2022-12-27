import React, { useState } from "react";

function ProdListItem({ imgNo, name, productPriceFormated }) {
  // props 방법1
  // const { imgNo, name, productPriceFormated } = props;
  // const productName = name;

  // props 방법2
  //const { imgNo, name: productName, productPriceFormated } = props;
  return (
    <>
      <div className="flex gap-[10px] flex-col">
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div className="text-center font-bold">{name}</div>
        <div className="after:content-['원'] text-center">
          {productPriceFormated}
        </div>
      </div>
    </>
  );
}

export default ProdListItem;
