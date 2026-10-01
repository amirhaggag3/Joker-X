'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { CATEGORIES, PRICE_RANGES } from '@/lib/constants';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(1000);
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price <= selectedPriceRange;
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-ink">
      <div className="container-custom section-padding">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Shop JOKER</h1>
        <p className="text-gray-400 mb-8">Premium collection for the discerning customer</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-20">
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="focus-ring"
                    />
                    <span className="ml-3 text-gray-300 hover:text-white">All Products</span>
                  </label>
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="focus-ring"
                      />
                      <span className="ml-3 text-gray-300 hover:text-white capitalize">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-400 mt-2">
                  Up to ${selectedPriceRange}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-800 text-white p-2 rounded focus-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="text-sm text-gray-400 mb-6">
              Showing {sortedProducts.length} products
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
