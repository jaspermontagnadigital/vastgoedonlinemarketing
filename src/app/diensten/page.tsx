import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diensten | Vastgoed Online Marketing",
  description:
    "Beter gevonden worden in Google, meer klanten via social media en inzicht in wat werkt. Ontdek hoe wij makelaars en vastgoedbedrijven helpen groeien in hun regio.",
};

const services = [
  {
    title: "Bovenaan in Google in jouw regio",
    subtitle: "SEO · Zoekmachine Optimalisatie",
    description:
      "Wij zorgen dat jouw vastgoedbedrijf bovenaan staat in Google, precies in de regio's waar jouw klanten zoeken. Een makelaar in Maastricht heeft niets aan bezoekers uit Groningen.",
    points: [
      "Gevonden worden in jouw stad en werkgebied",
      "Snellere en technisch sterkere website",
      "Relevante artikelen die kopers en huurders aantrekken",
      "Meer autoriteit opbouwen in Google",
      "Maandelijkse rapportage in begrijpelijke taal",
    ],
  },
  {
    title: "Direct meer aanvragen via Google",
    subtitle: "SEA · Betaald Adverteren op Google",
    description:
      "Met gerichte advertenties op Google bereik je direct mensen die nú zoeken naar vastgoed in jouw regio. Je betaalt alleen als iemand daadwerkelijk op jouw advertentie klikt.",
    points: [
      "Advertenties gericht op jouw stad of regio",
      "Alleen betalen als iemand klikt",
      "Testen welke advertentie het beste werkt",
      "Bijhouden hoeveel aanvragen je krijgt",
      "Wekelijkse bijsturing voor optimaal resultaat",
    ],
  },
  {
    title: "Meer klanten via social media",
    subtitle: "Instagram, TikTok, LinkedIn & Facebook",
    description:
      "Een sterk profiel op social media wekt vertrouwen en zorgt dat mensen jou kennen nog vóórdat ze op zoek gaan naar vastgoed. Wij zorgen voor de content, de strategie en het bereik.",
    points: [
      "Regelmatige posts op Instagram en Facebook",
      "TikTok video's die jouw objecten en expertise laten zien",
      "Betaalde campagnes voor meer bereik in jouw regio",
      "LinkedIn voor zakelijke contacten en investeerders",
      "Reageren op berichten en comments",
    ],
  },
  {
    title: "Van websitebezoeker naar klant",
    subtitle: "CRO · Conversie Optimalisatie",
    description:
      "Veel bezoekers op je website maar weinig reacties? Wij analyseren waarom mensen afhaken en zorgen dat meer bezoekers contact opnemen, een bezichtiging plannen of een formulier invullen.",
    points: [
      "Analyseren waarom bezoekers afhaken",
      "Pagina's aanpassen voor meer reacties",
      "Formulieren eenvoudiger en aantrekkelijker maken",
      "Testen welke teksten en knoppen beter werken",
      "Meer bezichtigingen en aanvragen uit bestaand verkeer",
    ],
  },
  {
    title: "Altijd weten wat je marketing oplevert",
    subtitle: "Data & Dashboarding",
    description:
      "Je hoeft niet te gissen wat werkt. Wij bouwen een overzichtelijk dashboard waarop je precies ziet hoeveel mensen je website bezoeken, waar ze vandaan komen en hoeveel leads elke campagne oplevert.",
    points: [
      "Overzichtelijk dashboard op maat",
      "Alle kanalen op één plek inzichtelijk",
      "Zien hoeveel leads elk kanaal oplevert",
      "Maandelijkse rapportage in begrijpelijke taal",
      "Concrete aanbevelingen op basis van data",
    ],
  },
  {
    title: "Processen versnellen met AI",
    subtitle: "Artificial Intelligence",
    description:
      "Wij helpen vastgoedbedrijven slimmer en sneller werken met behulp van Artificial Intelligence. AI neemt tijdrovende taken over, zodat jij je kunt focussen op wat écht belangrijk is.",
    points: [
      "Geautomatiseerde opvolging van leads",
      "AI-gedreven contentcreatie voor jouw kanalen",
      "Slimmere advertenties met automatische optimalisatie",
      "Chatbots en virtuele assistenten voor je website",
      "Procesanalyse: waar kan AI jou tijd besparen?",
    ],
  },
  {
    title: "Website ontwikkeling voor vastgoed",
    subtitle: "Website ontwikkeling",
    description:
      "Een professionele website die niet alleen mooi is, maar ook bezoekers omzet naar klanten. Wij bouwen websites specifiek voor vastgoedbedrijven — snel, overzichtelijk en gericht op meer aanvragen.",
    points: [
      "Websites op maat voor makelaars en vastgoedbedrijven",
      "Snel, mobiel vriendelijk en technisch sterk",
      "Gebouwd om gevonden te worden in Google",
      "Duidelijke structuur die bezoekers naar actie leidt",
      "Koppelingen met jouw bestaande systemen en tools",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-40 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-6">Onze diensten</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold max-w-2xl leading-tight">
              Meer klanten voor jouw vastgoedbedrijf
            </h1>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-24 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className="bg-white p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3">{s.subtitle}</p>
                  <h2 className="text-[var(--color-navy)] text-3xl font-serif mb-6">{s.title}</h2>
                  <p className="text-[var(--color-navy)]/60 leading-relaxed">{s.description}</p>
                </div>
                <div>
                  <h3 className="text-[var(--color-navy)] text-xs tracking-[0.2em] uppercase mb-6">Wat is inbegrepen</h3>
                  <ul className="space-y-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[var(--color-navy)]/70 text-sm">
                        <span className="text-[var(--color-gold)] mt-0.5 flex-shrink-0">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Foto tussenstuk */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598624538564-649575144efc?w=1800&q=80&fit=crop"
            alt="Nederlandse woning"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/50" />
          <div className="relative h-full flex items-center justify-center">
            <p className="text-white font-serif text-3xl md:text-4xl text-center px-6">
              Wij zorgen dat jouw vastgoed online opvalt
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-navy)] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-white mb-6">Interesse in een of meerdere diensten?</h2>
            <p className="text-white mb-10 leading-relaxed">
              Plan een gratis adviesgesprek en we bekijken samen wat de beste aanpak is voor jouw situatie.
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
