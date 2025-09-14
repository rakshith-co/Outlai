export function SocialProof() {
  const logos = ['Stripe', 'Google', 'Netflix', 'Amazon', 'Facebook', 'Spotify', 'Airbnb'];

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-light text-muted-foreground tracking-wider uppercase">
          Powering growth for companies you know
        </p>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <div key={logo} className="h-8 text-2xl font-bold text-muted-foreground opacity-30 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
