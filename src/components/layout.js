import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import CartTab from "./cartTab";
import { useSelector } from "react-redux";
import Footer from "../components/footer";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="bg-FAFAFA">
      <main
        className={`w-[1400px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
          statusTabCart === false ? "" : "-translate-x-56"
        } `}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
      <Footer />

    </div>
  );
};

export default Layout;
