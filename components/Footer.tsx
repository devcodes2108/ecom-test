"use client";

import { AtSign, Mail, MessageCircle, Send } from "lucide-react";
import { RotatingMandala } from "@/components/Motifs";

const columns = [
  { title: "Shop", links: ["Sarees", "Kurtis", "Kurtas", "Kids Wear", "Festive Collection"] },
  { title: "Support", links: ["Track Order", "Returns", "Shipping", "Size Guide", "Contact"] },
  { title: "Femiknit", links: ["Our Story", "Craft Partners", "Careers", "Stores", "Press"] }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300">
      <div className="mandala-ink absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-70" />
      <div className="mandala-ink absolute -bottom-28 left-8 h-72 w-72 rounded-full opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-9 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <RotatingMandala className="h-12 w-12" />
              <span className="font-serif text-3xl text-white">Femiknit</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-400">
              Subscribe for first access to festive drops and receive a welcome coupon on your first order.
            </p>
            <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter">
                Email address
              </label>
              <div className="flex min-w-0 flex-1 items-center rounded-full bg-white px-4 py-3 text-gray-900">
                <Mail size={18} className="text-rose-700" />
                <input id="newsletter" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" placeholder="you@example.com" type="email" />
              </div>
              <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-rose-950 transition hover:bg-amber-400" type="button">
                Get Coupon
              </button>
            </form>
          </div>

          <div className="grid gap-7 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 font-semibold text-white">{column.title}</h3>
                <ul className="grid gap-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-amber-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center">
          <p>(c) 2026 Femiknit. Crafted for Indian ethnic wear shoppers.</p>
          <div className="flex gap-3">
            <a className="rounded-full bg-white/10 p-2 transition hover:bg-rose-600" href="#" aria-label="Instagram">
              <AtSign size={18} />
            </a>
            <a className="rounded-full bg-white/10 p-2 transition hover:bg-rose-600" href="#" aria-label="Facebook">
              <MessageCircle size={18} />
            </a>
            <a className="rounded-full bg-white/10 p-2 transition hover:bg-rose-600" href="#" aria-label="Twitter">
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
