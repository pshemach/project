import React, { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {data && (
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
      )}
    </div>
  );
}
