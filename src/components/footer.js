
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footerBackground text-white py-8 md:py-12 px-4 md:px-0">
      <div className="container mx-auto max-w-full">
        <div className="text-center md:text-center mb-8">
          <h1 className="moreInfo font-semibold text-2xl md:text-3xl mb-2">
            For More Information
          </h1>
          <div className="md:flex md:items-center md:justify-center md:space-x-4">
            <div className="mb-4 md:mb-0">
              <p className="text-lg" aria-label="Address">
                Plot 78, Ogene Street Orozo Building Plaza Complex
              </p>
            </div>

            <div className="mb-4 md:mb-0">
              <p className="text-lg">
                <a
                  href="mailto:Mallitiverse.Org@email.com"
                  className="hover:underline"
                >
                  Mallitiverse.Org@email.com
                </a>
              </p>
            </div>

            <div>
              <p className="text-lg">
                <a
                  href="tel:+2340000000000"
                  className="hover:underline"
                >
                  +234 0000 000 0000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

