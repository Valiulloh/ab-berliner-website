import { company } from "@/data/company";

export function About() {
  return (
    <section id="ueber-uns" className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Über uns
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Ihr Partner für Renovierung und Baumanagement in Berlin
          </h2>
        </div>

        <div className="text-lg leading-8 text-gray-600">
          <p>
            {company.name} ist ein Berliner Unternehmen für Renovierung,
            Sanierung, Innenausbau und Baumanagement. Wir unterstützen Kunden
            bei der Umsetzung von Wohnungs-, Haus- und Gewerberenovierungen.
          </p>

          <p className="mt-6">
            Unser Ziel ist eine saubere, zuverlässige und termingerechte
            Ausführung. Von der Planung bis zur Umsetzung behalten wir Qualität,
            Kommunikation und Organisation im Blick.
          </p>
        </div>
      </div>
    </section>
  );
}