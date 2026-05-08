import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Datenschutz | A.B. Berliner Baumanagement GmbH",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      <main className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 leading-8 text-gray-700">
            <p>
              Diese Seite enthält die Datenschutzerklärung der Website. Der
              finale Text sollte vor Veröffentlichung rechtlich geprüft oder mit
              einem passenden Datenschutzgenerator erstellt werden.
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Verantwortliche Stelle
              </h2>

              <p className="mt-4">
                A.B. Berliner Baumanagement GmbH
                <br />
                Pariser Str. 44
                <br />
                10707 Berlin
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Kontaktaufnahme
              </h2>

              <p className="mt-4">
                Wenn Sie uns per E-Mail, Telefon, WhatsApp oder Kontaktformular
                kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
                verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Hinweis
              </h2>

              <p className="mt-4">
                Dies ist ein Platzhalter und keine Rechtsberatung. Der finale
                Datenschutztext sollte vor dem Livegang geprüft werden.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}