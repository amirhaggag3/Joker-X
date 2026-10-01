'use client';

import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary inline-block">
            <span className="flex items-center gap-2">
              <ArrowLeft size={20} /> Back to Shop
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-ink">
      <div className="container-custom section-padding">
        <Link href="/shop" className="flex items-center gap-2 text-primary hover:text-purple-400 mb-8">
          <ArrowLeft size={20} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[600px] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-primary mb-2">{product.category}</p>
              <h1 className="text-4xl font-black mb-2">{product.name}</h1>
              <p className="text-gray-400 text-lg">{product.rating} ★ • {product.stock} in stock</p>
            </div>

            <div className="mb-8 border-y border-gray-800 py-8">
              <p className="text-5xl font-bold">${product.price}</p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg">{product.description}</p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Size</label>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedSize === size
                          ? 'border-primary bg-primary/20'
                          : 'border-gray-700 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Color</label>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        selectedColor === color
                          ? 'border-primary bg-primary/20'
                          : 'border-gray-700 hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-3">Quantity</label>
                <div className="flex items-center gap-2 border border-gray-700 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-800"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div>
                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full mb-3"
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <Link href="/checkout" className="btn-secondary w-full text-center block">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
