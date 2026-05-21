import Image from "next/image";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section id="projekte" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
              Projekte
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Referenzen & Projektbeispiele
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Entdecken Sie ausgewählte Projektbeispiele aus Renovierung, Sanierung,
              Innenausbau, Bodenverlegung, Badsanierung und gewerblichen Arbeiten.
            </p>
          </div>

          <a
            href="#kontakt"
            className="rounded-full bg-gray-950 px-7 py-4 text-center text-sm font-bold text-white hover:bg-gray-800"
          >
            Projekt anfragen
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-56 bg-gray-100">
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

                <h3 className="mt-3 text-xl font-bold text-gray-950">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}