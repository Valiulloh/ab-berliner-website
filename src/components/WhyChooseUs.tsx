const points = [
  "Zuverlässige Ausführung",
  "Saubere Arbeitsweise",
  "Klare Kommunikation",
  "Viele Renovierungsleistungen aus einer Hand",
  "Für private und gewerbliche Kunden",
  "Berlin & Umgebung",
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                Warum wir?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Renovierungsarbeiten brauchen Vertrauen
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Eine Renovierung ist oft komplex. Deshalb legen wir Wert auf
                klare Absprachen, gute Organisation und saubere Ausführung.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-white/10 p-5 text-sm font-semibold"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}