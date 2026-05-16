const stats = [
  { value: "10+ jaar", label: "Online marketing ervaring" },
  { value: "2x", label: "Meer websitebezoek", sublabel: "binnen 4 maanden" },
  { value: "300%", label: "Meer leads gemiddeld" },
  { value: "100%", label: "Transparant over resultaten" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--color-gold)] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[var(--color-navy)] text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">
              {s.value}
            </div>
            <div className="text-[var(--color-navy)]/65 text-xs tracking-[0.2em] uppercase">{s.label}</div>
            {s.sublabel && <div className="text-[var(--color-navy)]/45 text-xs mt-0.5">{s.sublabel}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
