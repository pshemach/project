import React from "react";

export default function ProductItem({ data }) {
  return (
    <div className="product-card">
      {data.map((product) => (
        <div>
          <div>
            {product.images.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
          <h3>
            {product.name} {product.productId}
          </h3>
          <p>Qty: {product.quantity}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
