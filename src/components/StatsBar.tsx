"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+ jaar", label: "Online marketing ervaring", prefix: "", sublabel: "", staticText: "" },
  { value: 2, suffix: "x", label: "Meer websitebezoek", sublabel: "binnen 4 maanden", prefix: "", staticText: "" },
  { value: 300, suffix: "%", label: "Meer leads gemiddeld", prefix: "", sublabel: "", staticText: "" },
  { value: 100, suffix: "%", label: "Transparant over resultaten", prefix: "", sublabel: "", staticText: "" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, prefix, label, sublabel, staticText }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-[var(--color-navy)] text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">
        {staticText ?? <>{prefix}{count}{suffix}</>}
      </div>
      <div className="text-[var(--color-navy)]/65 text-xs tracking-[0.2em] uppercase">{label}</div>
      {sublabel && <div className="text-[var(--color-navy)]/45 text-xs mt-0.5">{sublabel}</div>}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[var(--color-gold)] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
