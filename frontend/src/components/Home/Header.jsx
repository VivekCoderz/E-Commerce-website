import React from 'react'
import { useState }from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              ShopHub
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
              <Heart size={24} className="text-gray-700" />
            </button>
            
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
              <User size={24} className="text-gray-700" />
            </button>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}