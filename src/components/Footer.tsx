import Link from "next/link";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-gray-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{company.name}</p>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              {company.tagline}
            </p>
          </div>

          <div>
            <p className="font-bold">Kontakt</p>
            <div className="mt-3 space-y-2 text-sm text-gray-400">
              <p>{company.address}</p>
              <p>{company.phone}</p>
              <p>{company.email}</p>
            </div>
          </div>

          <div>
            <p className="font-bold">Rechtliches</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}