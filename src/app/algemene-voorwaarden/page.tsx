import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Vastgoed Online Marketing",
  description: "De algemene voorwaarden van Vastgoed Online Marketing. Van offertes en betaling tot aansprakelijkheid en intellectueel eigendom.",
};

const articles = [
  {
    title: "1. Definities",
    content: [
      "Opdrachtnemer: Vastgoed Online Marketing, gevestigd in Nederland (KVK: 91875684).",
      "Opdrachtgever: de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met Opdrachtnemer.",
      "Diensten: alle werkzaamheden die Opdrachtnemer verricht voor Opdrachtgever, waaronder online marketing, websiteontwikkeling, content, advisering en rapportage.",
      "Overeenkomst: de schriftelijke of digitale afspraak tussen Opdrachtnemer en Opdrachtgever.",
    ],
  },
  {
    title: "2. Toepasselijkheid",
    content: [
      "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van Vastgoed Online Marketing.",
      "Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.",
      "De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de Opdrachtgever wordt uitdrukkelijk van de hand gewezen.",
    ],
  },
  {
    title: "3. Offertes en totstandkoming overeenkomst",
    content: [
      "Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld.",
      "Een overeenkomst komt tot stand na schriftelijke bevestiging door Opdrachtnemer of na aanvang van de werkzaamheden.",
      "Wijzigingen in de opdracht worden alleen doorgevoerd na schriftelijke bevestiging van beide partijen.",
    ],
  },
  {
    title: "4. Uitvoering van de diensten",
    content: [
      "Opdrachtnemer voert de werkzaamheden naar beste inzicht en vermogen uit.",
      "Opdrachtgever zorgt tijdig voor alle informatie, toegangen en materialen die noodzakelijk zijn voor de uitvoering.",
      "Opdrachtnemer heeft het recht werkzaamheden door derden te laten uitvoeren.",
      "Resultaten en doelstellingen zijn indicatief. Opdrachtnemer geeft geen garanties op specifieke aantallen leads, posities in Google of bereik op social media.",
    ],
  },
  {
    title: "5. Tarieven en betaling",
    content: [
      "Alle tarieven zijn exclusief btw, tenzij anders vermeld.",
      "Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan.",
      "Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en is wettelijke rente verschuldigd.",
      "Opdrachtnemer behoudt zich het recht voor de werkzaamheden op te schorten bij een betalingsachterstand van meer dan 30 dagen.",
    ],
  },
  {
    title: "6. Duur en beëindiging",
    content: [
      "Overeenkomsten worden aangegaan voor de duur zoals vermeld in de offerte of overeenkomst.",
      "Na de initiële looptijd wordt de overeenkomst maandelijks verlengd, tenzij schriftelijk opgezegd met een opzegtermijn van één kalendermaand.",
      "Opdrachtnemer kan de overeenkomst met onmiddellijke ingang beëindigen bij ernstig wangedrag of bij faillissement van Opdrachtgever.",
    ],
  },
  {
    title: "7. Aansprakelijkheid",
    content: [
      "De aansprakelijkheid van Opdrachtnemer is beperkt tot het bedrag dat in het betreffende geval door de beroepsaansprakelijkheidsverzekering wordt uitbetaald.",
      "Opdrachtnemer is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.",
      "Opdrachtgever vrijwaart Opdrachtnemer voor aanspraken van derden die verband houden met door Opdrachtgever aangeleverd materiaal.",
    ],
  },
  {
    title: "8. Intellectueel eigendom",
    content: [
      "Alle rechten op door Opdrachtnemer ontwikkelde content, designs en andere materialen berusten bij Opdrachtnemer, totdat alle facturen volledig zijn voldaan.",
      "Na volledige betaling gaan de rechten over op Opdrachtgever, tenzij schriftelijk anders overeengekomen.",
      "Opdrachtnemer behoudt het recht om de werkzaamheden te vermelden als referentie, tenzij Opdrachtgever hier schriftelijk bezwaar tegen maakt.",
    ],
  },
  {
    title: "9. Geheimhouding",
    content: [
      "Beide partijen zijn verplicht tot geheimhouding van vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar ontvangen.",
      "Deze verplichting blijft ook na beëindiging van de overeenkomst van kracht.",
    ],
  },
  {
    title: "10. Toepasselijk recht en geschillen",
    content: [
      "Op alle overeenkomsten is Nederlands recht van toepassing.",
      "Geschillen worden bij voorkeur in onderling overleg opgelost.",
      "Indien dit niet lukt, worden geschillen voorgelegd aan de bevoegde rechter in Nederland.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[var(--color-navy)] pt-40 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Juridisch</p>
            <h1 className="text-white text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Algemene Voorwaarden
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-sm text-[var(--color-navy)]/40 mb-12">Vastgesteld mei 2026 — dit is een conceptversie</p>
            <div className="space-y-10">
              {articles.map((article) => (
                <div key={article.title}>
                  <h2 className="text-[var(--color-navy)] font-serif text-2xl mb-4">{article.title}</h2>
                  <ul className="space-y-3 list-none pl-0">
                    {article.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-navy)]/70 leading-relaxed">
                        <span className="text-[var(--color-gold)] mt-1 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-8 border-t border-[var(--color-navy)]/10">
              <p className="text-[var(--color-navy)]/40 text-sm">
                Vastgoed Online Marketing · Nederland · <a href="mailto:info@vastgoedonlinemarketing.nl" className="text-[var(--color-gold)] underline">info@vastgoedonlinemarketing.nl</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
