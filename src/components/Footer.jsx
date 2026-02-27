import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="border-t border-gray-200 mt-20">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-16 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Forever is built on timeless style and everyday comfort. We create
            thoughtfully designed pieces that blend quality, simplicity, and
            modern trends — made to move with you, every day.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mb-5 tracking-wide">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black hover:translate-x-1 transition-all duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-300 cursor-pointer">
              Delivery
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 98765 43210</li>
            <li>support@forever.com</li>
            <li>Mon - Sat, 9AM - 6PM</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="py-6 text-sm text-center text-gray-400">
          © 2026 Forever. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
