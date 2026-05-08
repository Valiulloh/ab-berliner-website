const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    description:
      "Sie kontaktieren uns telefonisch, per E-Mail, WhatsApp oder Kontaktformular.",
  },
  {
    number: "02",
    title: "Projekt besprechen",
    description:
      "Wir besprechen Ihre Wünsche, den Umfang der Arbeiten und die nächsten Schritte.",
  },
  {
    number: "03",
    title: "Angebot erhalten",
    description:
      "Sie erhalten ein passendes Angebot für Ihre Renovierung oder Sanierung.",
  },
  {
    number: "04",
    title: "Umsetzung starten",
    description:
      "Nach Freigabe koordinieren und realisieren wir die vereinbarten Arbeiten.",
  },
];

export function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Ablauf
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            So einfach starten Sie Ihr Projekt
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-yellow-600">{step.number}</p>

              <h3 className="mt-4 text-xl font-bold text-gray-950">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}