import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="product-card-navigate">
      <p>View the product list </p>
      <button onClick={() => navigate("/product")}>Click Here</button>
    </div>
  );
}
