import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
// import CartTab from "./cartTab";
import { useSelector } from "react-redux";
// import Footer from "../components/footer";s
// import ImageWithContent from "../components/ImagesWithContent";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="bg-FAFAFA">
      <main className="w-[1440px] max-w-full m-auto p-[3px]  "> {/*Had w-[1440px]*/}
        <Header />
        <Outlet />
      </main>

      
      {/* <CartTab /> */}
    </div>
  );
};

export default Layout;