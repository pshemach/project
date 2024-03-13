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
          `http://localhost:8000/products?offset-${offset}&limit-${itemsPerSet}`
        );
        const newData = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...newData]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 500) {
        setOffset((prevOffset) => prevOffset + itemsPerSet);
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
