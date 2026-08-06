"use client";

import { createContext, useContext, useMemo, useState } from "react";

type StoreContextValue = {
  cartCount: number;
  wishlistCount: number;
  wishlist: Set<string>;
  addToCart: () => void;
  toggleWishlist: (id: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(2);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set(["saree-kanjivaram-green"]));

  const value = useMemo<StoreContextValue>(
    () => ({
      cartCount,
      wishlistCount: wishlist.size,
      wishlist,
      addToCart: () => setCartCount((count) => count + 1),
      toggleWishlist: (id) =>
        setWishlist((current) => {
          const next = new Set(current);
          if (next.has(id)) {
            next.delete(id);
          } else {
            next.add(id);
          }
          return next;
        })
    }),
    [cartCount, wishlist]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return context;
}
