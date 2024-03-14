import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";

export default function FetchData() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef(null);

  function onIntersection(e) {
    const firstEntry = e[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMore();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products]);
  async function fetchMore() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=8&skip=${page * 8}`
    );
    const data = await response.json();
    console.log(data);
    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);
    }
  }

  return (
    <div className="image-card-container">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
      {hasMore && <div ref={elementRef}>Load More.....</div>}
    </div>
  );
}
