import React, { useEffect, useState } from "react";

export default function ProductItem({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="product-card">
      <img src={product.images[currentImageIndex]} alt={product.name} />
      <h3>
        {product.name} {product.productId}
      </h3>
      <p>Qty: {product.quantity}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
