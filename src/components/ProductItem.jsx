import React from "react";

export default function ProductItem({ data }) {
  return (
    <div className="product-images">
      {data.map((product) => (
        <div>
          <p>{product.name}</p>
          <div>
            {product.images.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
