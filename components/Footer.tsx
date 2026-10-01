import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-gray-400">
      <div className="container-custom">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-black tracking-[0.2em] text-white">JOKER</p>
            <p className="mt-2 text-sm">Premium style. Premium quality.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-white transition">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 JOKER Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
