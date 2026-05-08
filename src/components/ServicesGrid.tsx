import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="leistungen" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Unsere Leistungen
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Alles für Ihre Renovierung aus einer Hand
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Von einzelnen Renovierungsarbeiten bis zur kompletten Sanierung:
            Wir unterstützen private und gewerbliche Kunden mit zuverlässigen
            Bauleistungen in Berlin.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-xl font-bold text-yellow-700">
                ✓
              </div>

              <h3 className="text-xl font-bold text-gray-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}