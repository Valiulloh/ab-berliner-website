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
      "Maßgefertigte Küchen- und Einbaumöbel mit Natursteinflächen, Glasvitrinen, hochwertigen Geräten und Fischgrätparkett. Die Ausführung verbindet klassische Eleganz mit moderner Funktionalität.",
    tags: ["Einbaumöbel", "Naturstein", "Fischgrätparkett"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-67.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-71.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-66.jpg",
    ],
  },
  {
    title: "Badezimmer & Naturstein",
    category: "Badsanierung",
    description:
      "Exklusive Badbereiche mit Naturstein, großen Spiegelflächen, Maßmöbeln und indirekter Beleuchtung. Hochwertige Materialien und präzise Details schaffen ein modernes, elegantes Gesamtbild.",
    tags: ["Badsanierung", "Naturstein", "Maßmöbel"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-70.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-59.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-64.jpg",
    ],
  },
  {
    title: "Ankleide & Maßmöbel",
    category: "Innenausbau",
    description:
      "Hochwertiger Innenausbau mit maßgefertigten Schrankanlagen, beleuchteten Regalen, Glasflächen und edlen Holzoberflächen. Die Räume wurden funktional geplant und sauber ausgeführt.",
    tags: ["Innenausbau", "Maßanfertigung", "Beleuchtung"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-62.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-29.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-73.jpg",
    ],
  },
  {
    title: "Atrium & Wohnbereich",
    category: "Sanierung im Bestand",
    description:
      "Großzügiger Wohnbereich mit Galerie, Kamin, Holzgeländer, Lichtakzenten und hochwertiger Bodenverlegung. Der Raum zeigt die Verbindung aus klassischem Bestand und moderner Sanierung.",
    tags: ["Sanierung", "Galerie", "Kaminbereich"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-56.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-60.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-42.jpg",
    ],
  },
  {
    title: "Parkett & Bodenarbeiten",
    category: "Bodenverlegung",
    description:
      "Hochwertige Bodenarbeiten mit Fischgrätparkett, sauberer Verlegung und edler Oberfläche. Die präzise Ausführung gibt den Räumen eine warme und repräsentative Wirkung.",
    tags: ["Bodenverlegung", "Parkett", "Fischgrät"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-65.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-40.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-12.jpg",
    ],
  },
  {
    title: "Pool & Wellnessbereich",
    category: "Wellnessbereich",
    description:
      "Moderner Wellnessbereich mit Pool, Sauna, Natursteinflächen und stimmungsvoller Lichtgestaltung. Die Kombination aus Wasser, Licht und ruhigen Oberflächen schafft eine exklusive Atmosphäre.",
    tags: ["Pool", "Sauna", "Naturstein"],
    images: [
      "/projects/villa-sanierung/villa-sanierung-berlin-48.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-47.jpg",
      "/projects/villa-sanierung/villa-sanierung-berlin-54.jpg",
    ],
  },
  {
    title: "Gewerbliche Innenräume",
    category: "Gewerbliche Renovierung",
    description:
      "Moderne Gewerbeflächen mit klarer Raumgestaltung, hellen Oberflächen, Sitzbereichen und hochwertiger Ausführung für Empfangs- und Bürobereiche.",
    tags: ["Gewerbe", "Empfangsbereich", "Bürofläche"],
    images: [
      "/projects/villa-sanierung/gewerbe-modern-berlin-4.jpg",
      "/projects/villa-sanierung/gewerbe-modern-berlin-3.jpg",
      "/projects/villa-sanierung/gewerbe-modern-berlin-5.jpg",
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
              alt="A.B. Berliner Baumanagement Projekte"
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
                Ausgewählte Arbeiten
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Einblick in hochwertige Sanierungs- und Ausbauarbeiten:
                Villa-Sanierung, Innenausbau, Badsanierung, Bodenverlegung,
                Wellnessbereich und gewerbliche Renovierung.
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
                    <div className="grid gap-6 md:grid-cols-[280px_1fr] md:items-start">
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
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
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