import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projekte & Referenzen | A.B. Berliner Baumanagement GmbH",
  description:
    "Projektbeispiele für Renovierung, Sanierung, Innenausbau, Trockenbau, Fliesenarbeiten und Bodenverlegung in Berlin.",
};

export default function ProjektePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gray-950 py-28 text-white">
          <Image
            src="/hero/hero-baumanagement-renovierung.jpg"
            alt="Projektarbeiten Renovierung Berlin"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-950/50" />
          <div className="absolute inset-0 bg-gray-950/45" />

          <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Projekte & Referenzen
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Einblicke in unsere Renovierungsarbeiten
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Hier sehen Sie ausgewählte Arbeiten aus Renovierung, Sanierung,
              Innenausbau, Bodenverlegung, Badsanierung und gewerblichen Projekten.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-bold text-yellow-600">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-gray-950">
                      {project.title}
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-gray-50 p-8 md:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                Planen Sie ein ähnliches Projekt?
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                Kontaktieren Sie uns für Renovierung, Sanierung, Innenausbau oder
                Baumanagement in Berlin und Umgebung. Wir besprechen Ihr Vorhaben und
                erstellen ein passendes Angebot.
              </p>

              <a
                href="/#kontakt"
                className="mt-8 inline-flex rounded-full bg-gray-950 px-7 py-4 text-sm font-bold text-white hover:bg-gray-800"
              >
                Eigenes Projekt anfragen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}