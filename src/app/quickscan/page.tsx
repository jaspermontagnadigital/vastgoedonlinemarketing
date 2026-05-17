import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wins = [
  {
    number: "01",
    title: "Hoe goed ben jij vindbaar in Google?",
    description:
      "Wij analyseren hoe jij scoort in Google voor de belangrijkste zoekopdrachten in jouw regio. Je ziet precies waar je staat en hoeveel potentiële klanten je nu mist.",
  },
  {
    number: "02",
    title: "Wat doet je concurrent beter online?",
    description:
      "We brengen in kaart wat andere vastgoedbedrijven in jouw regio online doen. Zo zie je direct waar de kansen liggen om hen voorbij te gaan.",
  },
  {
    number: "03",
    title: "Waarom haken bezoekers af op je website?",
    description:
      "We analyseren jouw website en laten zien waar mensen afhaken. Kleine aanpassingen kunnen direct zorgen voor meer contactaanvragen en bezichtigingen.",
  },
  {
    number: "04",
    title: "Welke social media kansen laat je liggen?",
    description:
      "We bekijken jouw huidige social media aanwezigheid en laten zien hoe je met minder moeite meer bereik en meer klanten kunt genereren.",
  },
  {
    number: "05",
    title: "Wat levert betere online marketing jou op?",
    description:
      "Op basis van de scan geven we een concrete inschatting van hoeveel extra leads en aanvragen betere online marketing voor jouw situatie kan opleveren.",
  },
];

export default function QuickscanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-40 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
              Tijdelijke actie — Bespaar €600
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold max-w-3xl leading-tight mb-6">
              Ontdek wat jouw vastgoedbedrijf online laat liggen
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Binnen 48 uur weet je precies waar je klanten misloopt en hoe je dat oplost. Één extra opdracht dekt de investering ruimschoots.
            </p>
            <div className="flex items-end gap-4">
              <span className="text-[var(--color-gold)] text-5xl font-serif font-bold">€795</span>
              <div className="mb-1">
                <span className="text-white/40 text-2xl line-through block">€1.395</span>
                <span className="text-white/50 text-xs">Normaalprijs</span>
              </div>
            </div>
            <p className="text-white/40 text-sm mt-3">Nog maar een beperkt aantal plekken beschikbaar tegen deze prijs.</p>
          </div>
        </section>
        {/* Wat je krijgt */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Wat je ontvangt</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)]">
                5 grote winsten voor jouw vastgoedbedrijf
              </h2>
            </div>
            <div className="space-y-6">
              {wins.map((w) => (
                <div key={w.number} className="bg-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="text-[var(--color-gold)] font-serif text-4xl font-bold opacity-40">{w.number}</div>
                  <div>
                    <h3 className="text-[var(--color-navy)] font-serif text-xl mb-3">{w.title}</h3>
                    <p className="text-[var(--color-navy)]/60 text-sm leading-relaxed">{w.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulier */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-4">
                Bespaar €600
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)] mb-4">
                Investering die zichzelf terugverdient
              </h2>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-[var(--color-navy)] text-4xl font-serif font-bold">€795</span>
                <span className="text-[var(--color-navy)]/30 text-xl line-through mb-1">€1.395</span>
              </div>
              <p className="text-[var(--color-navy)]/40 text-sm mb-6">Minder dan €2,20 per dag</p>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-6">
                Eén gemiste opdracht kost je al snel meer dan deze investering. Met de quickscan weet je precies waar je nu klanten misloopt en hoe je dat direct oplost.
              </p>
              <ul className="space-y-3">
                {[
                  "Persoonlijk rapport op maat",
                  "Binnen 48 uur in je inbox",
                  "5 concrete kansen uitgewerkt",
                  "Inclusief concurrentieanalyse in jouw regio",
                  "Één extra opdracht dekt de investering",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[var(--color-navy)]/70 text-sm">
                    <span className="text-[var(--color-gold)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[var(--color-navy)]/40 text-xs mt-6">Nog maar een beperkt aantal plekken beschikbaar tegen actieprijs.</p>
            </div>

            <div className="bg-[var(--color-cream)] p-10">
              <h3 className="text-[var(--color-navy)] font-serif text-xl mb-8">Bestel jouw quickscan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">Naam</label>
                  <input
                    type="text"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-white"
                    placeholder="Jan de Vries"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">Bedrijfsnaam</label>
                  <input
                    type="text"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-white"
                    placeholder="De Vries Makelaardij"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">Website</label>
                  <input
                    type="url"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-white"
                    placeholder="www.mijnmakelaardij.nl"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-white"
                    placeholder="jan@mijnmakelaardij.nl"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-navy)] text-white font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors duration-200"
                >
                  Bestel nu voor €795
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
