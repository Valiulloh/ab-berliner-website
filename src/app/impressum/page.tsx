import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/data/company";

export const metadata = {
  title: "Impressum | A.B. Berliner Baumanagement GmbH",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 leading-8 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Angaben gemäß § 5 TMG
              </h2>

              <p className="mt-4">
                {company.name}
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
                Vertreten durch
              </h2>

              <p className="mt-4">
                {company.managingDirector}, Geschäftsführer
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">Kontakt</h2>

              <p className="mt-4">
                Telefon: {company.phone}
                <br />
                E-Mail: {company.email}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Registereintrag
              </h2>

              <p className="mt-4">
                Registergericht: {company.registerCourt}
                <br />
                Registernummer: {company.registerNumber}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Wichtiger Hinweis
              </h2>

              <p className="mt-4">
                Dieses Impressum sollte vor Veröffentlichung rechtlich geprüft
                werden.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}