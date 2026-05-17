import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Vastgoed Online Marketing",
  description:
    "Plan een gratis adviesgesprek en ontdek hoeveel meer klanten jij online kunt bereiken. Binnen 30 minuten weet je wat er mogelijk is voor jouw vastgoedbedrijf.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-40 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-6">Contact</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold max-w-2xl leading-tight">
              Laten we kennismaken
            </h1>
          </div>
        </section>

        {/* Contact */}
        <section className="py-28 bg-[var(--color-cream)]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-serif text-[var(--color-navy)] mb-6">
                Laten we kennismaken
              </h2>
              <p className="text-[var(--color-navy)]/60 leading-relaxed mb-10">
                Plan een gratis adviesgesprek. In 30 minuten bespreken we jouw situatie en kansen online. Daarna ontvang je een vrijblijvend voorstel op maat, volledig meetbaar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-gold)] text-lg">@</span>
                  </div>
                  <div>
                    <p className="text-[var(--color-navy)] text-xs tracking-widest uppercase mb-1">E-mail</p>
                    <a
                      href="mailto:info@vastgoedonlinemarketing.nl"
                      className="text-[var(--color-navy)]/70 hover:text-[var(--color-gold)] transition-colors"
                    >
                      info@vastgoedonlinemarketing.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-gold)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-gold)] text-lg">◎</span>
                  </div>
                  <div>
                    <p className="text-[var(--color-navy)] text-xs tracking-widest uppercase mb-1">Locatie</p>
                    <p className="text-[var(--color-navy)]/70">Nederland, landelijk actief</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10">
              <h3 className="text-[var(--color-navy)] font-serif text-xl mb-8">Stuur ons een bericht</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-transparent"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-transparent"
                      placeholder="de Vries"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-transparent"
                    placeholder="jan@mijnbedrijf.nl"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-transparent"
                    placeholder="Mijn Makelaardij BV"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-navy)] text-xs tracking-widest uppercase mb-2">
                    Bericht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-[var(--color-navy)]/15 px-4 py-3 text-[var(--color-navy)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-transparent resize-none"
                    placeholder="Vertel kort over je situatie en wat je wilt bereiken..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-navy)] text-white font-semibold tracking-widest uppercase text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors duration-200"
                >
                  Verstuur bericht
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
