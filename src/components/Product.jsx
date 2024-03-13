import React, { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div>products</div>
    </div>
  );
}
