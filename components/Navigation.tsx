'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';

export default function Navigation() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-lg font-black text-white">
            J
          </div>
          <div>
            <p className="text-lg font-black tracking-wider">JOKER</p>
            <p className="text-[10px] uppercase text-gray-400">store</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="/" className="hover:text-white transition-fast">Home</Link>
          <Link href="/shop" className="hover:text-white transition-fast">Shop</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative flex items-center gap-2 rounded-full border border-gray-700 px-3 py-2 hover:border-primary transition-fast">
            <ShoppingBag size={18} />
            <span className="text-sm">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
