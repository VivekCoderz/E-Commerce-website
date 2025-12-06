import React from "react";
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

const ProductCard = ({ product ,getBadgeColor,favorites,toggleFavorite}) => {
  return (
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
          <span
            className={`absolute top-3 left-3 ${getBadgeColor(
              product.badge
            )} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
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
                ? "bg-red-500 text-white"
                : "bg-white hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart
              size={20}
              fill={favorites.includes(product.id) ? "currentColor" : "none"}
            />
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
                className={
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
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
  );
};

export default ProductCard;
