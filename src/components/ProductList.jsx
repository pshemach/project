import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const itemsPerSet = 8;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${itemsPerSet}&skip=${
            offset * itemsPerSet
          }`
        );
        const newData = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...newData.products]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    console.log(products);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setOffset((prevOffset) => prevOffset + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="image-card-container">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
