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
        <circle cx="11" cy="11" r="5" />
        <path d="M11 8v3l2 2" />
        <path d="m21 21-4.35-4.35" />
        <path d="M3 7h4M3 12h2M3 17h4" />
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
        <path d="M9 12h6M9 16h4M4 6h16v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6z" />
        <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
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
        <rect x="2" y="14" width="6" height="8" />
        <rect x="9" y="9" width="6" height="13" />
        <rect x="16" y="4" width="6" height="18" />
        <path d="M2 22h20" />
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
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
              {doelgroepen.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="group bg-white p-8 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl border-t-2 border-transparent hover:border-[var(--color-gold)]"
                >
                  <div className="text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-[var(--color-navy)]">{d.titel}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-navy)]/60">{d.subtitel}</p>
                  </div>
                  <span className="text-xs tracking-widest uppercase font-semibold mt-auto text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors">
                    Lees meer ↓
                  </span>
                </a>
              ))}
              {/* 6e blok: Ook interessant voor */}
              <div className="group bg-white p-8 flex flex-col gap-6 border-t-2 border-transparent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8 text-[var(--color-navy)]">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[var(--color-navy)]">Ook interessant voor</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-navy)]/60 mb-3">
                    Werk je in of rondom vastgoed maar staat jouw type bedrijf er niet tussen? Dan denken we graag mee.
                  </p>
                  <ul className="space-y-1">
                    {ookInteressant.map((item) => (
                      <li key={item} className="text-[var(--color-navy)]/60 text-sm flex items-center gap-2">
                        <span className="text-[var(--color-gold)] text-xs">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="text-xs tracking-widest uppercase font-semibold mt-auto text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors">
                  Denk met ons mee ↓
                </Link>
              </div>
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


        {/* Afsluitende CTA */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[var(--color-navy)] p-10">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Gratis</p>
              <h3 className="text-white font-serif text-2xl mb-4">Plan een gratis adviesgesprek</h3>
              <p className="text-white text-sm leading-relaxed mb-8">
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
