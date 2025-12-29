import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
