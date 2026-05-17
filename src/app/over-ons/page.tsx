import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Over ons | Vastgoed Online Marketing",
  description:
    "Wij richten ons volledig op de vastgoedmarkt. Geen generalist die vandaag een bakker en morgen een makelaar helpt. Leer ons kennen en ontdek wat we voor jouw bedrijf kunnen betekenen.",
};

const values = [
  {
    title: "Focus op de vastgoedmarkt",
    body: "Volledige focus op vastgoed. Dat maakt onze strategieën per regio scherper en effectiever.",
  },
  {
    title: "Datagedreven",
    body: "Elke strategie is gebaseerd op data. We meten alles, trekken conclusies en sturen bij waar nodig.",
  },
  {
    title: "Langdurige relaties",
    body: "We werken liever langdurig samen dan op projectbasis. Groei kost tijd en vraagt vertrouwen.",
  },
  {
    title: "Transparantie",
    body: "Geen rookgordijn. Je hebt altijd inzage in wat we doen, waarom en met welk resultaat.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-40 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-6">Over ons</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold max-w-2xl leading-tight">
              De vastgoedmarketeer die jouw sector begrijpt
            </h1>
          </div>
        </section>

        {/* Verhaal */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)] mb-8">
                Wij geloven dat vastgoed meer verdient dan generieke marketing
              </h2>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-6">
                Vastgoed Online Marketing is opgericht met één doel: de online marketing van vastgoedbedrijven naar een hoger niveau tillen. We hebben gezien hoe bureaus met weinig sectorkennis campagnes opleveren die niet aansluiten bij de realiteit van de vastgoedmarkt.
              </p>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-6">
                Omdat wij ons volledig focussen op de vastgoedmarkt, leveren wij betere resultaten. Geen generalist die vandaag een bakker en morgen een makelaar helpt. Wij kennen jouw markt, jouw doelgroep en wat werkt om die te bereiken.
              </p>
              <p className="text-[var(--color-navy)]/60 leading-relaxed">
                Dat vertaalt zich in marketing die werkt, voor zowel residentieel als commercieel vastgoed.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-10 space-y-8">
              <div className="border-l-2 border-[var(--color-gold)] pl-6">
                <p className="text-[var(--color-navy)] font-serif text-xl leading-relaxed italic">
                  "Wij helpen vastgoedprofessionals niet alleen meer leads te genereren. Wij helpen ze betere klanten te vinden."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-[var(--color-navy)] text-3xl font-serif font-bold">10+</div>
                  <div className="text-[var(--color-navy)]/50 text-xs tracking-widest uppercase mt-1">Jaar ervaring</div>
                </div>
                <div>
                  <div className="text-[var(--color-navy)] text-3xl font-serif font-bold">100%</div>
                  <div className="text-[var(--color-navy)]/50 text-xs tracking-widest uppercase mt-1">Meetbaar</div>
                </div>
                <div>
                  <div className="text-[var(--color-navy)] text-3xl font-serif font-bold">5</div>
                  <div className="text-[var(--color-navy)]/50 text-xs tracking-widest uppercase mt-1">Specialismes</div>
                </div>
                <div>
                  <div className="text-[var(--color-navy)] text-3xl font-serif font-bold">NL</div>
                  <div className="text-[var(--color-navy)]/50 text-xs tracking-widest uppercase mt-1">Actief</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foto tussenstuk */}
        <div className="grid grid-cols-3 h-64">
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1598624538564-649575144efc?w=600&q=80&fit=crop" alt="Vastgoed" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1583295125721-766a0088cd3f?w=600&q=80&fit=crop" alt="Amsterdam gracht" fill className="object-cover" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1623005329287-0848374575d3?w=600&q=80&fit=crop" alt="Luxe villa" fill className="object-cover" />
          </div>
        </div>

        {/* Waarden */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Onze waarden</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)] mb-16 max-w-lg">
              Waar wij voor staan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white p-8 border-l-2 border-[var(--color-gold)]">
                  <h3 className="text-[var(--color-navy)] font-serif text-xl mb-3">{v.title}</h3>
                  <p className="text-[var(--color-navy)]/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-navy)] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-white mb-6">Maak kennis met ons team</h2>
            <p className="text-white mb-10 leading-relaxed">
              Plan een vrijblijvend gesprek en ontdek hoe wij jouw vastgoedbedrijf kunnen laten groeien.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
