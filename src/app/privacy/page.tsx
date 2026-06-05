import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacyverklaring | Vastgoed Online Marketing",
  description: "Lees hoe Vastgoed Online Marketing omgaat met jouw persoonsgegevens. Transparant, conform de AVG en altijd in jouw belang.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[var(--color-navy)] pt-40 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Juridisch</p>
            <h1 className="text-white text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Privacyverklaring
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg">
            <div className="space-y-10 text-[var(--color-navy)]/70 leading-relaxed">

              <div>
                <p className="text-sm text-[var(--color-navy)]/40 mb-8">Laatst bijgewerkt: mei 2026 — dit is een conceptversie</p>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">1. Wie zijn wij?</h2>
                <p>Vastgoed Online Marketing is een online marketingbureau gespecialiseerd in de vastgoedsector. Wij zijn gevestigd in Nederland (KVK: 91875684) en actief voor opdrachtgevers in vastgoed, wonen en financiering.</p>
                <p className="mt-3">Voor vragen over deze privacyverklaring kun je contact opnemen via: <a href="mailto:info@vastgoedonlinemarketing.nl" className="text-[var(--color-gold)] underline">info@vastgoedonlinemarketing.nl</a></p>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">2. Welke gegevens verzamelen wij?</h2>
                <p>Via onze website en bij het verlenen van diensten kunnen wij de volgende persoonsgegevens verwerken:</p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    "Naam en contactgegevens (e-mailadres, telefoonnummer)",
                    "Bedrijfsnaam en functie",
                    "Website en online aanwezigheid van jouw bedrijf",
                    "Gegevens die je invult via contactformulieren",
                    "Technische gegevens zoals IP-adres en browsertype (via cookies)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-gold)] mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">3. Waarvoor gebruiken wij jouw gegevens?</h2>
                <p>Wij gebruiken jouw gegevens uitsluitend voor de volgende doeleinden:</p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    "Het beantwoorden van jouw vragen of aanvragen",
                    "Het uitvoeren van onze dienstverlening",
                    "Het versturen van offertes of voorstellen",
                    "Het verbeteren van onze website en diensten",
                    "Het voldoen aan wettelijke verplichtingen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-gold)] mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">4. Hoe lang bewaren wij jouw gegevens?</h2>
                <p>Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zolang als wettelijk vereist. Contactgegevens van leads en klanten bewaren wij maximaal 2 jaar na het laatste contact.</p>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">5. Cookies</h2>
                <p>Onze website maakt gebruik van analytische cookies om inzicht te krijgen in het gebruik van de website. Wij gebruiken hiervoor Google Analytics. De gegevens worden geanonimiseerd verwerkt en niet gedeeld met derden voor commerciële doeleinden.</p>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">6. Jouw rechten</h2>
                <p>Op grond van de AVG heb je de volgende rechten:</p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    "Recht op inzage in jouw persoonsgegevens",
                    "Recht op correctie van onjuiste gegevens",
                    "Recht op verwijdering van jouw gegevens",
                    "Recht op beperking van de verwerking",
                    "Recht op bezwaar tegen verwerking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-gold)] mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">Om gebruik te maken van jouw rechten kun je een verzoek sturen naar <a href="mailto:info@vastgoedonlinemarketing.nl" className="text-[var(--color-gold)] underline">info@vastgoedonlinemarketing.nl</a>.</p>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">7. Beveiliging</h2>
                <p>Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang.</p>
              </div>

              <div>
                <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">8. Klachten</h2>
                <p>Heb je een klacht over de verwerking van jouw persoonsgegevens? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] underline">autoriteitpersoonsgegevens.nl</a>.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
