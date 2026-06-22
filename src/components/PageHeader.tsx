const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20 relative overflow-hidden">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    <div className="container mx-auto px-4 text-center relative animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
      {subtitle && <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export default PageHeader;