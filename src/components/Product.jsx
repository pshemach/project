import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

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
  return <div>{data && <ProductItem data={data} />}</div>;
}
