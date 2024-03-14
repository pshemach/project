import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Error from "./components/Error";
import FetchData from "./components/FetchData";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<FetchData />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/items" element={<Product />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
