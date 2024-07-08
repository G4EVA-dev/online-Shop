// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footerBackground text-white h-[300px] flex flex-col items-center justify-center px-4 md:px-0">
      <div>
        <h1 className="font-semibold text-[20px] mb-[47px] text-center">For More Information</h1>
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center md:space-x-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>Plot 78, Ogene Street Orozo Building Plaza Complex</p>
        </div>

        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>
            <a href="mailto:Mallitiverse.Org@email.com" className="hover:underline">
              Mallitiverse.Org@email.com
            </a>
          </p>
        </div>

        <div className="text-center md:text-left">
          <p>
            <a href="tel:+2340000000000" className="hover:underline">
              +234 0000 000 0000
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
