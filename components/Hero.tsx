import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.2),_transparent_40%),linear-gradient(to_bottom,_#0b0b0f,_#111827)]">
      <div className="container-custom grid items-center gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Premium Collection
          </p>
          <h1 className="text-5xl font-black leading-tight sm:text-6xl">
            Own the <span className="gradient-text">JOKER</span> edge.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover exclusive essentials built for people who move differently. Clean design. Bold presence. Unmatched quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">Shop Collection</Link>
            <Link href="#featured" className="btn-secondary">Learn More</Link>
          </div>
          <div className="mt-10 flex gap-10 text-sm text-gray-300">
            <div>
              <p className="text-3xl font-bold text-white">2000+</p>
              <p>happy buyers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p>customer rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 shadow-glow">
            <Image
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
              alt="Premium fashion"
              width={1200}
              height={900}
              priority
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
