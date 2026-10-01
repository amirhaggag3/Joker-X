import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewsletterSection from '@/components/NewsletterSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <section className="section-padding bg-gradient-to-b from-ink to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Discover Premium Quality
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium products designed for those who demand excellence.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}
