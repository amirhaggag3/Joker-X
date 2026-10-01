import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';

export default function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="section-padding bg-black" id="featured">
      <div className="container-custom">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Featured</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trending Products</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
