import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Checkout from "./pages/checkout";
import MyCart from "./pages/myCart";
import Payment from "./pages/payment";
import PaymentSuccess from "./pages/paymentSuccess";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
