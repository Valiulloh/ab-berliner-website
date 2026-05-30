"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projectGroups = [
  {
    title: "Küche & Einbaumöbel",
    category: "Villa Sanierung",
    description:
      "Maßgefertigte Küchen- und Einbaumöbel mit Natursteinflächen, Glasvitrinen, hochwertigen Geräten und Fischgrätparkett. Die Arbeiten verbinden klare Linien, edle Materialien und präzise Ausführung.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-1.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-35.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-4.jpg",
    ],
  },
  {
    title: "Badezimmer & Naturstein",
    category: "Badsanierung",
    description:
      "Exklusive Badbereiche mit Naturstein, großen Spiegelflächen, Maßmöbeln und indirekter Beleuchtung. Hochwertige Oberflächen sorgen für ein modernes und elegantes Gesamtbild.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-16.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-17.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-28.jpg",
    ],
  },
  {
    title: "Pool & Wellnessbereich",
    category: "Wellnessbereich",
    description:
      "Moderner Wellnessbereich mit Pool, Sauna, Natursteinflächen und stimmungsvoller Lichtgestaltung. Die Kombination aus Wasser, Licht und ruhigen Oberflächen schafft eine hochwertige Atmosphäre.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-40.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-41.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-42.jpg",
    ],
  },
  {
    title: "Atrium & Wohnbereich",
    category: "Sanierung im Bestand",
    description:
      "Großzügiger Wohnbereich mit Galerie, Kamin, Holzgeländer, Lichtakzenten und hochwertiger Bodenverlegung. Der Raum zeigt die Verbindung aus klassischem Bestand und moderner Sanierung.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-31.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-29.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-30.jpg",
    ],
  },
  {
    title: "Parkett & Bodenarbeiten",
    category: "Bodenverlegung",
    description:
      "Hochwertige Bodenarbeiten mit Fischgrätparkett, sauberer Verlegung und edler Oberfläche. Die präzise Ausführung gibt den Räumen eine warme und repräsentative Wirkung.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-10.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-39.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-12.jpg",
    ],
  },
  {
    title: "Pool & Wellnessbereich",
    category: "Wellnessbereich",
    description:
      "Moderner Wellnessbereich mit Pool, Sauna, Natursteinflächen und stimmungsvoller Lichtgestaltung. Die ruhigen Oberflächen, klaren Linien und warmen Lichtakzente schaffen eine exklusive Atmosphäre.",
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-48.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-47.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-54.jpg",
    ],
  },
];

export default function ProjektePage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-gray-950 py-28 text-white">
          <div className="absolute inset-0">
            <Image
              src="/hero/hero-baumanagement-renovierung.jpg"
              alt="Villa Sanierung Berlin"
              fill
              priority
              className="object-cover opacity-35"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                Projekte
              </p>

              <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                Villa Sanierung in Berlin
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Ein hochwertiges Sanierungsprojekt mit Innenausbau,
                Parkettarbeiten, Badsanierung, Wellnessbereich und
                maßgefertigten Einbauten.
              </p>

              <p className="mt-5 text-sm font-semibold text-gray-300">
                Bilder anklicken zum Vergrößern.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12">
              {projectGroups.map((project, index) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
                >
                  <div className="grid grid-cols-1 overflow-hidden md:grid-cols-3">
                    {project.images.map((image) => (
                      <button
                        type="button"
                        key={image}
                        onClick={() => setActiveImage(image)}
                        className="group relative h-72 overflow-hidden bg-gray-100 md:h-80"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} Berlin`}
                          fill
                          className="object-cover"
                        />

                        <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white">
                          Vergrößern
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                          {project.category}
                        </p>

                        <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950">
                          {index + 1}. {project.title}
                        </h2>
                      </div>

                      <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-gray-600">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                            Innenausbau
                          </span>
                          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                            Hochwertige Ausführung
                          </span>
                          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                            Berlin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                Beratung
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Sie planen ein ähnliches Projekt?
              </h2>

              <p className="mt-3 max-w-2xl text-gray-300">
                Kontaktieren Sie uns für Sanierung, Innenausbau, Badsanierung,
                Bodenverlegung und hochwertige Renovierungsarbeiten.
              </p>
            </div>

            <a
              href="/kontakt"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-black text-gray-950 hover:bg-gray-100"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
          >
            Schließen
          </button>

          <div className="relative h-[88vh] w-[94vw]">
            <Image
              src={activeImage}
              alt="Projekt Bild groß"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}