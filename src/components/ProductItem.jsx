import React from "react";

export default function ProductItem({ product }) {
  return (
    <div>
      {product.map((data) => {
        <div>
          <h3>{data.name}</h3>
          <p>{data.quantity}</p>
        </div>;
      })}
    </div>
  );
}
