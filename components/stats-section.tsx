export function StatsSection() {
  const stats = [
    {
      value: "10+",
      label: "anni di esperienza",
    },
    {
      value: "400+",
      label: "progetti completati",
    },
    {
      value: "40+",
      label: "dipendenti",
    },
    {
      value: "+67%",
      label: "Crescita 2021",
    },
    {
      value: "120+",
      label: "clienti",
    },
  ]

  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
