import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Product() {
  const size = 8;
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${size}&skip=${page * size}`
    );
    const data = await response.json();
    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      setProduct((prev) => [...prev, ...data.products]);
    }
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
    fetchProducts();
  }

  return (
    <InfiniteScroll
      dataLength={50}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading data again....</p>}
      endMessage={<p>This is the end...</p>}
    >
      {console.log(product.length)}
      <div className="image-card-container">
        {product.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
