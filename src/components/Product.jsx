import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import "./product.css";

export default function Product() {
  const [data, setData] = useState(null);
  const [imageSet, setImageSet] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerSet = 4;
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const getImageSet = () => {
    const startIndex = (-1 + imageSet) * itemsPerSet;
    const endIndex = startIndex + itemsPerSet;
    return data ? data.slice(startIndex, endIndex) : [];
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        setImageSet((prevSet) => prevSet + 1);
        console.log("current-hieght", scrollTop + clientHeight);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div ref={containerRef}>
        {data && <ProductItem product={getImageSet()} />}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}
