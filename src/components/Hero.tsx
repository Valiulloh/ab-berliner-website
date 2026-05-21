import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Renovierung & Sanierung in Berlin
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Professionelle Renovierung & Sanierung in Berlin
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            {company.name} übernimmt Renovierungs-, Sanierungs- und
            Innenausbauarbeiten für Wohnungen, Häuser und Gewerberäume in Berlin
            und Umgebung — zuverlässig, sauber und termingerecht.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="rounded-full bg-yellow-400 px-7 py-4 text-center text-sm font-bold text-gray-950 hover:bg-yellow-300"
            >
              Kostenloses Angebot anfragen
            </a>

            <a
              href="/leistungen"
              className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-bold text-white hover:bg-white hover:text-gray-950"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-8 shadow-2xl">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-white p-6 text-gray-950">
              <p className="text-sm font-semibold text-gray-500">
                Schwerpunkt
              </p>
              <p className="mt-2 text-2xl font-bold">
                Renovierung, Sanierung & Innenausbau
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-400 p-6 text-gray-950">
              <p className="text-sm font-semibold">Standort</p>
              <p className="mt-2 text-2xl font-bold">Berlin & Umgebung</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-950">
              <p className="text-sm font-semibold text-gray-500">Kontakt</p>
              <p className="mt-2 text-2xl font-bold">{company.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}