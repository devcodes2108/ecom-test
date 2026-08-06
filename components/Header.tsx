"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const navItems = ["Sarees", "Kurtis", "Kurtas", "Kids Wear", "New Arrivals", "Festive Collection", "Sale"];
const offers = [
  "Festive Sale: Flat 25% off on handloom sarees",
  "Free express delivery on prepaid orders above Rs 1,999",
  "Use FEMI15 for an extra 15% off new arrivals"
];

export function Header() {
  const { cartCount, wishlistCount } = useStore();
  const [offerIndex, setOfferIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOfferIndex((index) => (index + 1) % offers.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="overflow-hidden bg-rose-900 px-4 py-2 text-center text-sm font-medium text-white">
        <AnimatePresence mode="wait">
          <motion.p
            key={offers[offerIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {offers[offerIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 lg:hidden"
              type="button"
              aria-label="Open navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>

            <a href="#" className="font-serif text-xl tracking-wide text-rose-800 sm:text-2xl">
              Femiknit
            </a>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <IconBadge icon={<Heart size={20} />} label="Wishlist" count={wishlistCount} />
              <IconBadge icon={<UserRound size={20} />} label="Account" />
              <IconBadge icon={<ShoppingBag size={20} />} label="Cart" count={cartCount} />
            </div>
          </div>

          <nav className="mt-3 hidden items-center justify-center gap-6 text-sm font-medium text-gray-700 lg:flex">
            {navItems.map((item) => (
              <a
                className="group relative transition-colors duration-300 hover:text-rose-600"
                href={item === "Sale" ? "#shop" : "#"}
                key={item}
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="mt-3 flex items-center rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm md:hidden">
            <Search size={18} className="text-gray-400" />
            <input
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
              placeholder="Search collection"
              aria-label="Search products"
            />
          </div>

          <div className="mt-3 hidden min-w-56 max-w-xs flex-1 items-center rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm md:flex lg:max-w-sm">
            <Search size={18} className="text-gray-400" />
            <input
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
              placeholder="Search sarees, kurtis..."
              aria-label="Search products"
            />
            <button className="text-sm font-semibold text-rose-700" type="button">
              Search
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.aside
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto h-full w-80 max-w-[86vw] bg-white p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-2xl text-rose-800">Femiknit</span>
                <button className="rounded-full p-2 text-gray-700" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
                  <X size={21} />
                </button>
              </div>
              <div className="mb-5 flex items-center rounded-full border border-gray-200 px-3 py-2">
                <Search size={18} className="text-gray-400" />
                <input className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" placeholder="Search collection" />
              </div>
              <nav className="grid gap-3 text-base font-medium text-gray-800">
                {navItems.map((item) => (
                  <a href="#" key={item} className="rounded-xl px-3 py-2 hover:bg-amber-50 hover:text-rose-700">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function IconBadge({ icon, label, count }: { icon: React.ReactNode; label: string; count?: number }) {
  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-amber-50 hover:text-rose-700"
      type="button"
      aria-label={label}
      title={label}
    >
      {icon}
      {typeof count === "number" ? (
        <span className="absolute -right-1 -top-1 rounded-full bg-amber-500 px-1.5 py-0.5 text-xs text-white">{count}</span>
      ) : null}
    </button>
  );
}
