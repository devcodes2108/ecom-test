"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/data";
import { useStore } from "@/context/StoreContext";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [hovered, setHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const loved = wishlist.has(product.id);

  useEffect(() => {
    if (!hovered) {
      setImageIndex(0);
      return;
    }
    const timer = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % product.images.length);
    }, 900);
    return () => window.clearInterval(timer);
  }, [hovered, product.images.length]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:border-amber-400 hover:shadow-product-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="traditional-frame relative m-3 aspect-[4/5] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            key={product.images[imageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.images[imageIndex]}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-rose-700 shadow-sm">
          {product.badge}
        </span>
        <button
          className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm transition ${
            loved ? "text-rose-600" : "text-gray-600 hover:text-rose-600"
          }`}
          type="button"
          aria-label="Toggle wishlist"
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart size={19} fill={loved ? "currentColor" : "none"} />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
          {product.images.map((image, itemIndex) => (
            <span key={image} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/60">
              <motion.span
                className="block h-full rounded-full bg-amber-400"
                initial={false}
                animate={{ width: itemIndex === imageIndex ? "100%" : "0%" }}
                transition={{ duration: itemIndex === imageIndex && hovered ? 0.8 : 0.2 }}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 pt-1">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 min-h-11 text-base font-semibold text-gray-950">{product.title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700">
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg font-bold text-rose-700">Rs {product.price.toLocaleString("en-IN")}</span>
          <span className="text-sm text-gray-400 line-through">Rs {product.mrp.toLocaleString("en-IN")}</span>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex gap-1.5" aria-label="Available colors">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="h-5 w-5 rounded-full border border-gray-200 shadow-sm"
                title={color.name}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">{product.ageGroup}</span>
        </div>

        <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-amber-500 px-4 py-2.5 text-sm font-medium text-amber-700 transition-colors duration-200 hover:bg-amber-50"
            type="button"
            onClick={addToCart}
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-rose-700 hover:to-amber-600 active:scale-95"
            type="button"
          >
            <Sparkles size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
