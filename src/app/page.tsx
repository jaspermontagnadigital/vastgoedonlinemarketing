import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";

const services = [
  {
    title: "Plek #1 in Google",
    description:
      "Wanneer iemand zoekt op 'makelaar Maastricht' of 'huis kopen Utrecht', wij zorgen dat jij bovenaan staat in jouw regio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Meer klanten via social media",
    description:
      "Van Instagram en TikTok tot LinkedIn, wij zorgen dat jij opvalt, vertrouwen wekt en klanten aantrekt via social media.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Van websitebezoeker naar klant",
    description:
      "Veel bezoekers maar weinig reacties? Wij zorgen dat mensen sneller contact opnemen of een bezichtiging plannen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Converterende e-mail strategie",
    description:
      "Blijf top of mind bij kopers, huurders en relaties. Wij bouwen slimme e-mailcampagnes die leads omzetten naar klanten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Processen versnellen met AI",
    description:
      "Wij helpen vastgoedbedrijven slimmer werken met Artificial Intelligence. Van geautomatiseerde opvolging tot snellere content, AI bespaart tijd en verhoogt resultaat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z"/><circle cx="12" cy="13" r="2"/><path d="M12 11v-2"/>
      </svg>
    ),
  },
  {
    title: "Live inzichten in de resultaten",
    description:
      "Realtime overzicht van je resultaten. Zo weet je precies waar je klanten vandaan komen en wat je marketing oplevert.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[var(--color-navy)] min-h-screen flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1583295125721-766a0088cd3f?w=1800&q=80&fit=crop"
            alt="Amsterdamse grachtenpanden"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/85" />
          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
<h1 className="text-white text-5xl md:text-7xl font-serif font-semibold leading-tight mb-8 max-w-3xl">
              De online marketing<br />specialist voor<br />
              <span className="text-[var(--color-gold)]">makelaars & vastgoed.</span>
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Wij zorgen dat kopers, huurders en vastgoedeigenaren jou als eerste vinden én blijven zien, van Google tot LinkedIn, Instagram en Funda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors duration-200 text-center"
              >
                Gratis adviesgesprek
              </Link>
              <Link
                href="/diensten"
                className="px-8 py-4 border border-white/20 text-white font-semibold tracking-widest uppercase text-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200 text-center"
              >
                Bekijk diensten
              </Link>
            </div>
          </div>
        </section>

        <StatsBar />

        {/* Diensten */}
        <section className="py-28 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Wat wij doen</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)]">
                Alles wat je nodig hebt om online te groeien
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white p-8 border-t-2 border-[var(--color-gold)] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[var(--color-gold)] mb-6">{s.icon}</div>
                  <h3 className="text-[var(--color-navy)] text-xl font-serif mb-3">{s.title}</h3>
                  <p className="text-[var(--color-navy)]/60 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/diensten"
                className="inline-block px-8 py-4 bg-[var(--color-navy)] text-white font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-navy-light)] transition-colors duration-200"
              >
                Alle diensten
              </Link>
            </div>
          </div>
        </section>

        {/* Voor wie */}
        <section className="py-20 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Voor wie wij werken</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] mb-6">
                Wij werken voor bedrijven in vastgoed, wonen en financiering
              </h2>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-10">
                Van makelaars en hypotheekadviseurs tot projectontwikkelaars en verhuurorganisaties. Wij kennen jouw markt en zorgen dat jij online groeit in jouw regio.
              </p>
              <Link
                href="/voor-wie"
                className="inline-block px-8 py-4 bg-[var(--color-navy)] text-white font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-navy-light)] transition-colors duration-200"
              >
                Bekijk alle doelgroepen
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Makelaars",
                "Hypotheekadviseurs",
                "Projectontwikkelaars",
                "Vastgoedbeheerders",
                "Verhuurorganisaties",
                "En meer...",
              ].map((item) => (
                <Link
                  key={item}
                  href="/voor-wie"
                  className="group bg-white px-6 py-5 border-l-2 border-[var(--color-gold)] hover:bg-[var(--color-navy)] transition-colors duration-200"
                >
                  <span className="text-[var(--color-navy)] group-hover:text-white font-serif text-base transition-colors duration-200">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quickscan */}
        <section className="py-24 bg-[var(--color-navy)]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold tracking-widest uppercase px-4 py-2 mb-6">
                Tijdelijke actie
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Weet binnen een week waar jouw groei ligt
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Wij scannen jouw volledige online aanwezigheid en leveren 5 concrete groeikansen op maat. Eén extra opdracht dekt de investering ruimschoots.
              </p>
              <div className="flex items-end gap-3 mb-8">
                <span className="text-[var(--color-gold)] text-4xl font-serif font-bold">795,-</span>
                <span className="text-white text-xl line-through mb-1">1.395,-</span>
                <span className="text-white text-sm mb-1">normaal</span>
              </div>
              <Link
                href="/quickscan"
                className="inline-block px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors duration-200"
              >
                Bekijk mijn groeikansen
              </Link>
              <p className="text-white text-xs mt-4">Nog beperkt aantal plekken beschikbaar tegen actieprijs.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Hoe vindbaar ben jij in Google?",
                "Wat doet jouw concurrent beter?",
                "Waarom haken bezoekers af op je website?",
                "Welke social media kansen laat je liggen?",
                "Wat levert betere marketing jou concreet op?",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-4 bg-white/5 px-6 py-4 border border-white/10">
                  <span className="text-[var(--color-gold)] font-serif text-lg font-bold opacity-60 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waarom wij */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Waarom wij</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] mb-8">
                Volledige focus op vastgoed, met ervaring uit meerdere sectoren
              </h2>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-6">
                Omdat wij ons volledig richten op de vastgoedmarkt, kunnen wij gerichtere en effectievere online marketingstrategieën toepassen. Geen generieke aanpak, maar werk dat past bij jouw sector.
              </p>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-10">
                Onze ervaring in andere branches brengen wij mee. Wat werkt in andere markten passen wij slim toe op vastgoed. Zo profiteer jij van bewezen inzichten die anderen in de vastgoedsector nog niet hebben.
              </p>
              <Link
                href="/over-ons"
                className="inline-block px-8 py-4 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors duration-200"
              >
                Over ons
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1623005329287-0848374575d3?w=800&q=80&fit=crop"
                  alt="Luxe Nederlandse villa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Regionaal sterk", body: "Wij zorgen dat jij dé bekendste naam bent in jouw regio." },
                  { title: "Datagedreven", body: "Elke beslissing onderbouwd met cijfers en inzichten." },
                  { title: "Transparant", body: "Volledige inzage in resultaten via realtime dashboards." },
                  { title: "Resultaatgericht", body: "Wij meten succes in leads, verkopen en omzet." },
                ].map((item) => (
                  <div key={item.title} className="bg-[var(--color-cream)] p-6">
                    <h4 className="text-[var(--color-navy)] font-serif text-lg mb-2">{item.title}</h4>
                    <p className="text-[var(--color-navy)]/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-navy)] py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Plan een gratis adviesgesprek
            </h2>
            <p className="text-white mb-8 leading-relaxed">
              In 30 minuten bespreken we jouw situatie en kansen online. Daarna ontvang je een vrijblijvend voorstel op maat, volledig meetbaar.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors duration-200"
            >
              Vrijblijvend gesprek inplannen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
