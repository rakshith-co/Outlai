export function SocialProof() {
  const logos = ['Stripe', 'Google', 'Netflix', 'Amazon', 'Facebook'];

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-light text-muted-foreground tracking-wider uppercase">
          Trusted by innovative companies worldwide
        </p>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <div key={logo} className="h-8 text-2xl font-bold text-muted-foreground opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
