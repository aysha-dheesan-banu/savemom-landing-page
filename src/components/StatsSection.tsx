const StatsSection = () => {
  const stats = [
    {
      number: "36,400,000",
      label: "Successful Deliveries"
    },
    {
      number: "5+",
      label: "State Government"
    },
    {
      number: "36,00,000",
      label: "Women Onboarded"
    },
    {
      number: "7,320",
      label: "High-risk Pregnancies"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;