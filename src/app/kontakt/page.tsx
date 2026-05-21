import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/data/company";

export const metadata = {
  title: "Kontakt | A.B. Berliner Baumanagement GmbH",
  description:
    "Kontaktieren Sie A.B. Berliner Baumanagement GmbH für Renovierung, Sanierung, Innenausbau und Baumanagement in Berlin und Umgebung.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gray-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Kontakt
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Fragen Sie Ihr Renovierungsprojekt unverbindlich an
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Kontaktieren Sie uns für Renovierung, Sanierung, Innenausbau,
              Bodenverlegung, Badsanierung oder Baumanagement in Berlin und
              Umgebung.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
            <a
              href={company.phoneHref}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
                Telefon
              </p>
              <p className="mt-4 text-2xl font-bold text-gray-950">
                {company.phone}
              </p>
              <p className="mt-3 text-gray-600">Direkt anrufen</p>
            </a>

            <a
              href={company.whatsappHref}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
                WhatsApp
              </p>
              <p className="mt-4 text-2xl font-bold text-gray-950">
                Nachricht senden
              </p>
              <p className="mt-3 text-gray-600">
                Schnell und unkompliziert Kontakt aufnehmen
              </p>
            </a>

            <a
              href={company.emailHref}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
                E-Mail
              </p>
              <p className="mt-4 break-words text-2xl font-bold text-gray-950">
                {company.email}
              </p>
              <p className="mt-3 text-gray-600">
                Projektbeschreibung senden
              </p>
            </a>
          </div>
        </section>

        <ContactSection />

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                Standort
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Renovierung in Berlin & Umgebung
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                {company.name} ist in Berlin ansässig und übernimmt Projekte in
                Berlin sowie nach Absprache auch in der Umgebung.
              </p>

              <p className="mt-6 text-lg font-semibold text-white">
                {company.address}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}