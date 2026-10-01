export default function NewsletterSection() {
  return (
    <section className="section-padding border-t border-white/10 bg-gray-950">
      <div className="container-custom">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-gray-900 to-secondary/10 p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Stay Updated</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Get Early Access to New Drops</h2>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
