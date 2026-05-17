import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Voor wie | Online marketing voor vastgoed & wonen",
  description:
    "Online marketing voor makelaars, hypotheekadviseurs, projectontwikkelaars en vastgoedbeheerders. Meer zichtbaarheid, betere leads en meetbare groei.",
};

const doelgroepen = [
  {
    id: "makelaars",
    titel: "Makelaars",
    subtitel: "Meer zichtbaarheid bij de juiste doelgroep in jouw regio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    intro:
      "Makelaardij is breed. Een verkoopmakelaar wil woningverkopers bereiken. Een aankoopmakelaar richt zich op kopers. Verhuur- en aanhuurmakelaars spreken weer andere doelgroepen aan. Daarom geloven wij niet in één standaardaanpak.",
    tekst:
      "We kijken naar jouw type dienstverlening, regio, doelgroep en commerciële doel. Zo zorgen we dat jouw online marketing aansluit op de aanvragen die jij echt wilt ontvangen.",
    doelen: [
      "Meer verkoopaanvragen uit je eigen regio",
      "Meer kopers die begeleiding zoeken",
      "Meer verhuurders of huurders bereiken",
      "Meer zichtbaarheid voor bedrijfspanden of beleggingsobjecten",
      "Meer aanvragen via je website of contactformulier",
    ],
  },
  {
    id: "hypotheekadviseurs",
    titel: "Hypotheekadviseurs",
    subtitel: "Meer adviesgesprekken met mensen die actief bezig zijn met wonen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    intro:
      "Mensen zoeken online naar hulp bij kopen, verhuizen, oversluiten of verduurzamen. Op dat moment wil je zichtbaar zijn met een duidelijke boodschap en een laagdrempelige vervolgstap.",
    tekst:
      "Wij helpen hypotheekadviseurs om beter gevonden te worden en meer aanvragen te halen uit bezoekers die al bezig zijn met hun woonsituatie. Denk aan starters, doorstromers, ondernemers of oversluiters.",
    doelen: [
      "Meer kennismakingsgesprekken",
      "Meer aanvragen van starters of doorstromers",
      "Betere lokale vindbaarheid",
      "Meer leads uit Google of social media",
      "Meer grip op welke campagnes aanvragen opleveren",
    ],
  },
  {
    id: "projectontwikkelaars",
    titel: "Projectontwikkelaars",
    subtitel: "Meer aandacht en leads voor projecten in de regio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <rect x="2" y="7" width="20" height="15" rx="1" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9" y1="14.5" x2="15" y2="14.5" />
      </svg>
    ),
    intro:
      "Bij nieuwbouw- en vastgoedprojecten wil je niet alleen zichtbaar zijn, maar de juiste mensen bereiken. Denk aan potentiële kopers, huurders, beleggers of geïnteresseerden uit de regio.",
    tekst:
      "Wij helpen om projecten gericht onder de aandacht te brengen via social media, Google en projectgerichte landingspagina's. Zo levert een project niet alleen zichtbaarheid, maar ook concrete leads en inschrijvingen.",
    doelen: [
      "Meer bekendheid voor een project in de regio",
      "Meer inschrijvingen van potentiële kopers of huurders",
      "Meer leads voor nieuwbouwprojecten",
      "Betere opvolging van geïnteresseerden",
      "Meer inzicht in campagneprestaties en leadkwaliteit",
    ],
  },
  {
    id: "vastgoedbeheerders",
    titel: "Vastgoedbeheerders",
    subtitel: "Meer aanvragen van eigenaren, beleggers en VvE's",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    intro:
      "Vastgoedbeheerders willen zichtbaar zijn bij partijen die hun beheer professioneel willen uitbesteden. Denk aan particuliere eigenaren, beleggers, verhuurders of VvE's.",
    tekst:
      "Wij helpen om jouw dienstverlening duidelijker te positioneren en online beter zichtbaar te worden bij de doelgroepen die voor jouw bedrijf het meest waardevol zijn.",
    doelen: [
      "Meer aanvragen van vastgoedeigenaren",
      "Meer zichtbaarheid bij beleggers",
      "Meer aanvragen voor verhuurbeheer of technisch beheer",
      "Duidelijkere uitleg van je dienstverlening",
      "Meer kwalitatieve contactaanvragen via je website",
    ],
  },
  {
    id: "verhuurorganisaties",
    titel: "Verhuurorganisaties",
    subtitel: "Meer bereik onder huurders, verhuurders en woningzoekenden",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    intro:
      "Voor verhuurorganisaties draait online marketing om snelheid, vertrouwen en duidelijke communicatie. Je wilt de juiste mensen bereiken, of dat nu huurders, expats, particuliere verhuurders of beleggers zijn.",
    tekst:
      "Wij helpen om jouw aanbod en dienstverlening beter zichtbaar te maken, zodat je meer relevante aanvragen ontvangt en minder afhankelijk wordt van losse platforms of toevallige vindbaarheid.",
    doelen: [
      "Meer aanvragen van woningzoekenden",
      "Meer verhuurders aantrekken",
      "Betere zichtbaarheid voor beschikbare huurwoningen",
      "Meer leads uit specifieke regio's",
      "Sterkere online presentatie van je verhuurdiensten",
    ],
  },
];

const ookInteressant = [
  "Taxateurs",
  "Aankoopbegeleiders",
  "VvE-beheerders",
  "Bouwkundig keurders",
  "Verduurzamingsadviseurs",
  "Woningstylisten",
  "Vastgoedfotografen",
  "Partijen rondom woningfinanciering",
];

export default function VoorWiePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[var(--color-navy)] pt-40 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-6">Voor wie</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold max-w-3xl leading-tight mb-8">
              Voor bedrijven in vastgoed, wonen en financiering
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
              Vastgoed Online Marketing helpt bedrijven in vastgoed, wonen en financiering om online beter zichtbaar te worden en meer kwalitatieve aanvragen te genereren. Van makelaars en hypotheekadviseurs tot projectontwikkelaars en vastgoedbeheerders.
            </p>
            <p className="text-white/60 max-w-2xl leading-relaxed mb-10">
              We kijken niet alleen naar meer bezoekers, maar vooral naar de juiste doelgroep, de juiste boodschap en aanvragen die waardevol zijn voor jouw bedrijf. Praktisch, meetbaar en gericht op groei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors text-center">
                Plan een gratis adviesgesprek
              </Link>
              <Link href="/quickscan" className="px-8 py-4 border border-white/20 text-white font-semibold tracking-widest uppercase text-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors text-center">
                Vraag de quickscan aan
              </Link>
            </div>
          </div>
        </section>

        {/* Doelgroepen grid */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Voor wie we werken</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)] mb-16">
              Herken jij jouw bedrijf?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doelgroepen.map((d, i) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className={`group p-8 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl ${
                    i === 0 ? "md:col-span-2 lg:col-span-1 bg-[var(--color-navy)]" : "bg-white"
                  }`}
                >
                  <div className={`${i === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-navy)]"} group-hover:text-[var(--color-gold)] transition-colors`}>
                    {d.icon}
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl mb-2 ${i === 0 ? "text-white" : "text-[var(--color-navy)]"}`}>
                      {d.titel}
                    </h3>
                    <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/60" : "text-[var(--color-navy)]/60"}`}>
                      {d.subtitel}
                    </p>
                  </div>
                  <span className={`text-xs tracking-widest uppercase font-semibold mt-auto ${i === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-navy)]"} group-hover:text-[var(--color-gold)] transition-colors`}>
                    Lees meer ↓
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Uitgewerkte doelgroepen */}
        {doelgroepen.map((d, i) => (
          <section
            key={d.id}
            id={d.id}
            className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-cream)]"}`}
          >
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-[var(--color-gold)] mb-6">{d.icon}</div>
                <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3">{d.subtitel}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-navy)] mb-6">{d.titel}</h2>
                <p className="text-[var(--color-navy)]/60 leading-relaxed mb-4">{d.intro}</p>
                <p className="text-[var(--color-navy)]/60 leading-relaxed">{d.tekst}</p>
              </div>
              <div>
                <h3 className="text-[var(--color-navy)] text-xs tracking-[0.2em] uppercase mb-6">Voorbeelden van doelen</h3>
                <ul className="space-y-0">
                  {d.doelen.map((doel, j) => (
                    <li key={doel} className="flex items-start gap-4 py-4 border-b border-[var(--color-navy)]/8">
                      <div className="bg-[var(--color-navy)] text-[var(--color-gold)] font-serif text-sm font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {String(j + 1).padStart(2, "0")}
                      </div>
                      <span className="text-[var(--color-navy)]/70 text-sm leading-relaxed pt-1">{doel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* Ook interessant voor */}
        <section className="py-24 bg-[var(--color-navy)]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Ook interessant voor</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Werk je in of rondom vastgoed?
            </h2>
            <p className="text-white/60 max-w-xl leading-relaxed mb-12">
              We werken ook voor andere partijen rondom vastgoed, wonen en financiering. Staat jouw type bedrijf er niet tussen? Dan denken we graag mee.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {ookInteressant.map((item) => (
                <span key={item} className="px-5 py-2.5 border border-white/20 text-white/70 text-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-block px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors">
              Denk met ons mee
            </Link>
          </div>
        </section>

        {/* Afsluitende CTA */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[var(--color-navy)] p-10">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Gratis</p>
              <h3 className="text-white font-serif text-2xl mb-4">Plan een gratis adviesgesprek</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                In dit gesprek kijken we samen naar je bedrijf, doelgroep en online kansen. Je krijgt direct een eerste beeld van waar je kunt verbeteren.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold-light)] transition-colors">
                Plan een gesprek
              </Link>
            </div>
            <div className="bg-white p-10 border-t-2 border-[var(--color-gold)]">
              <div className="flex items-end gap-3 mb-4">
                <span className="text-[var(--color-navy)] text-3xl font-serif font-bold">795,-</span>
                <span className="text-[var(--color-navy)]/30 text-lg line-through mb-0.5">1.395,-</span>
              </div>
              <h3 className="text-[var(--color-navy)] font-serif text-2xl mb-4">Quickscan op maat</h3>
              <p className="text-[var(--color-navy)]/60 text-sm leading-relaxed mb-8">
                Concreet inzicht in je website, vindbaarheid en conversie. We brengen helder in kaart waar je nu staat en welke verbeterpunten het meeste effect hebben.
              </p>
              <Link href="/quickscan" className="inline-block px-8 py-4 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors">
                Vraag de quickscan aan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
