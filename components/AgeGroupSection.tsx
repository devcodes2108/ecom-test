"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ageGroups } from "@/lib/data";

export function AgeGroupSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Shop by age group</p>
          <h2 className="mt-2 font-serif text-3xl text-rose-950 sm:text-4xl">Tradition, styled for every generation</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-gray-500">
          Thoughtfully sized silhouettes for school functions, first festive wardrobes, daily rituals, and wedding moments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ageGroups.map((group, index) => (
          <motion.a
            href="#shop"
            key={group.title}
            className="group text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div
              className={`mx-auto aspect-square w-full max-w-56 overflow-hidden rounded-full border-4 sm:max-w-60 ${
                index % 2 ? "border-rose-600" : "border-amber-400"
              } shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:border-rose-600`}
            >
              <Image src={group.image} alt={group.title} width={500} height={500} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 font-serif text-xl text-gray-950 sm:text-2xl">{group.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{group.copy}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
