"use client";

import { useState } from "react";
import { company } from "@/data/company";

export function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent("Neue Anfrage über die Website");
  const body = encodeURIComponent(
    `Name: ${name}\nKontakt: ${contact}\n\nNachricht:\n${message}`
  );

  const mailtoHref = `${company.emailHref}?subject=${subject}&body=${body}`;

  return (
    <section id="kontakt" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Kontakt
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Kostenloses Angebot anfragen
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kontaktieren Sie uns für Renovierung, Sanierung oder Baumanagement
            in Berlin und Umgebung.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p>
              <strong>Telefon:</strong>{" "}
              <a href={company.phoneHref} className="hover:underline">
                {company.phone}
              </a>
            </p>

            <p>
              <strong>E-Mail:</strong>{" "}
              <a href={company.emailHref} className="hover:underline">
                {company.email}
              </a>
            </p>

            <p>
              <strong>Adresse:</strong> {company.address}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={company.phoneHref}
              className="rounded-full bg-gray-950 px-7 py-4 text-center text-sm font-bold text-white hover:bg-gray-800"
            >
              Jetzt anrufen
            </a>

            <a
              href={company.whatsappHref}
              className="rounded-full border border-gray-300 px-7 py-4 text-center text-sm font-bold text-gray-950 hover:bg-gray-100"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>

        <form className="rounded-3xl bg-gray-50 p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-950"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Telefon oder E-Mail
              </label>
              <input
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-950"
                placeholder="Kontaktmöglichkeit"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Nachricht
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-950"
                placeholder="Beschreiben Sie kurz Ihr Projekt"
              />
            </div>

            <a
              href={mailtoHref}
              className="rounded-full bg-yellow-400 px-7 py-4 text-center text-sm font-bold text-gray-950 hover:bg-yellow-300"
            >
              Anfrage senden
            </a>

            <p className="text-xs leading-6 text-gray-500">
              Beim Klick auf „Anfrage senden“ öffnet sich Ihr E-Mail-Programm
              mit der vorbereiteten Nachricht.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}