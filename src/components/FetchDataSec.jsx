import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";

export default function FetchDataSec() {
  const size = 8;
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState([]);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchingData() {
    setIsLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${size}&skip=${page * size}`
    );
    const data = await res.json();
    console.log(data);
    setProduct((prev) => [...prev, ...data.products]);
    setIsLoading(false);
  }

  const handleScroll = async () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const innerHeight = container.clientHeight;
    const scrollHeight = container.scrollHeight;
    if (scrollTop + innerHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [page]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);
  return (
    <div className="image-card-container" ref={containerRef}>
      {product.map((item, index) => (
        <ProductItem key={index} product={item} />
      ))}
    </div>
  );
}
