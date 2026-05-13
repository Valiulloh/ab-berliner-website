"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Projekte", href: "#projekte" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-sm font-black text-yellow-400">
            AB
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-gray-950">
              {company.shortName}
            </span>
            <span className="text-xs text-gray-600">Baumanagement GmbH</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={company.phoneHref}
            className="rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Jetzt anrufen
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-950 lg:hidden"
        >
          Menü
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}

            <a
              href={company.phoneHref}
              className="mt-2 rounded-full bg-gray-950 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-800"
            >
              Jetzt anrufen
            </a>

            <a
              href={company.whatsappHref}
              className="rounded-full border border-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-950 hover:bg-gray-100"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      )}
    </header>
  );
}