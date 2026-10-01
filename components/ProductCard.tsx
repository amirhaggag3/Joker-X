'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/store';
import { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-transform hover:-translate-y-1">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative h-72 w-full overflow-hidden bg-gray-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
            {product.category}
          </span>
          <span className="text-sm text-gray-400">{product.rating} ★</span>
        </div>

        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="text-xl font-semibold text-white hover:text-primary transition-fast">{product.name}</h3>
        </Link>

        <p className="mt-3 text-sm text-gray-400 line-clamp-2">{product.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">${product.price}</p>
          </div>
          <button
            onClick={() => addItem(product)}
            className="btn-primary px-4 py-2 text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
