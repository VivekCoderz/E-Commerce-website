import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopHub</h2>
          <p className="text-sm">
            Your one-stop destination for premium gadgets and accessories. 
            Quality you can trust, prices you’ll love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest deals and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-white text-black px-4 rounded-r-md font-semibold hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
