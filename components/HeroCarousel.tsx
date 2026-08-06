"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 5400);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];
  const go = (direction: number) => setActive((current) => (current + direction + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-[78vh] min-h-[560px] overflow-hidden bg-gray-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
        >
          <Image src={slide.image} alt={slide.title} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          className="max-w-2xl pt-12 text-white"
          key={slide.title}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="mb-5 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-rose-950 shadow-lg">
            {slide.badge}
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">{slide.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">{slide.subtitle}</p>
          <button className="mt-8 rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-rose-700">
            {slide.cta}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((item, index) => (
          <button
            className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-amber-400" : "w-2.5 bg-white/70"}`}
            key={item.title}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-rose-800 shadow-lg transition hover:bg-white sm:inline-flex"
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-rose-800 shadow-lg transition hover:bg-white sm:inline-flex"
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <ChevronRight />
      </button>
    </section>
  );
}
