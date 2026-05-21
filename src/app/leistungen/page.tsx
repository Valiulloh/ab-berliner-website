import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services } from "@/data/services";

export const metadata = {
  title: "Leistungen | A.B. Berliner Baumanagement GmbH",
  description:
    "Renovierung, Sanierung, Trockenbau, Malerarbeiten, Bodenverlegung, Fliesenarbeiten und Innenausbau in Berlin.",
};

export default function LeistungenPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gray-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Unsere Leistungen
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Renovierung, Sanierung & Innenausbau in Berlin
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              A.B. Berliner Baumanagement GmbH bietet zuverlässige
              Renovierungs- und Sanierungsarbeiten für Wohnungen, Häuser und
              Gewerberäume in Berlin und Umgebung.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-xl font-bold text-yellow-700">
                    ✓
                  </div>

                  <h2 className="text-2xl font-bold text-gray-950">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Sie planen eine Renovierung?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                Kontaktieren Sie uns und beschreiben Sie kurz Ihr Projekt. Wir
                besprechen die nächsten Schritte und erstellen ein passendes
                Angebot.
              </p>

              <a
                href="/#kontakt"
                className="mt-8 inline-flex rounded-full bg-yellow-400 px-7 py-4 text-sm font-bold text-gray-950 hover:bg-yellow-300"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}