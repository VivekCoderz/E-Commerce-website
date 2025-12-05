import React from 'react';
import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 89.99,
      originalPrice: 129.99,
      category: "shoes",
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
      badge: "Sale"
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 149.99,
      category: "accessories",
      rating: 4.8,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
      badge: "New"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 79.99,
      originalPrice: 99.99,
      category: "clothing",
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 199.99,
      category: "electronics",
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      badge: "Hot"
    },
    {
      id: 5,
      name: "Summer Floral Dress",
      price: 59.99,
      category: "clothing",
      rating: 4.4,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
      badge: "New"
    },
    {
      id: 6,
      name: "Sport Running Shoes",
      price: 119.99,
      category: "shoes",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
    },
    {
      id: 7,
      name: "Sunglasses Collection",
      price: 89.99,
      originalPrice: 129.99,
      category: "accessories",
      rating: 4.3,
      reviews: 74,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
      badge: "Sale"
    },
    {
      id: 8,
      name: "Smart Watch Pro",
      price: 299.99,
      category: "electronics",
      rating: 4.8,
      reviews: 421,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      badge: "Hot"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'electronics', label: 'Electronics' }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Sale': return 'bg-red-500';
      case 'New': return 'bg-green-500';
      case 'Hot': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending items and customer favorites
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-3 rounded-full transition-colors ${
                      favorites.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart size={20} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}