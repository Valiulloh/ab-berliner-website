import Link from "next/link";
import { company } from "@/data/company";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-gray-950">
            {company.shortName}
          </span>
          <span className="text-xs text-gray-600">Baumanagement GmbH</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={company.phoneHref}
          className="rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Jetzt anrufen
        </a>
      </div>
    </header>
  );
}