import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-[var(--color-gold)] font-serif text-lg font-semibold block">Vastgoed</span>
              <span className="text-white text-xs tracking-[0.2em] uppercase">Online Marketing</span>
            </div>
            <p className="text-sm leading-relaxed">
              Wij helpen vastgoedprofessionals groeien met gerichte, datagedreven online marketing.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">Diensten</h4>
            <ul className="space-y-3 text-sm">
              {["SEO", "SEA", "Social Media Marketing", "Conversie Optimalisatie", "Data & Dashboarding"].map((s) => (
                <li key={s}>
                  <Link href="/diensten" className="hover:text-[var(--color-gold)] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@vastgoedonlinemarketing.nl" className="hover:text-[var(--color-gold)] transition-colors">
                  info@vastgoedonlinemarketing.nl
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">
                  Gratis adviesgesprek
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Vastgoed Online Marketing. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">Privacy</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-[var(--color-gold)] transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
