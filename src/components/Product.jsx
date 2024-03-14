import React from "react";
import FetchData from "./FetchData";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <FetchData />
      <div className="product-card-navigate">
        <p>Back to Home </p>
        <button onClick={() => navigate("/Home")}>Click Here</button>
      </div>
    </div>
  );
}
