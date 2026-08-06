"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { ageOptions, categories, occasions, products, sizes } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

type Filters = {
  query: string;
  category: string;
  size: string;
  color: string;
  price: number;
  ageGroup: string;
  occasion: string;
};

const initialFilters: Filters = {
  query: "",
  category: "All",
  size: "All",
  color: "All",
  price: 5000,
  ageGroup: "All",
  occasion: "All"
};

export function ShopExperience() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const query = filters.query.trim().toLowerCase();
      const matchesQuery =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.occasion.toLowerCase().includes(query);

      return (
        matchesQuery &&
        (filters.category === "All" || product.category === filters.category) &&
        (filters.size === "All" || product.size.includes(filters.size)) &&
        (filters.color === "All" || product.colors.some((color) => color.name === filters.color)) &&
        product.price <= filters.price &&
        (filters.ageGroup === "All" || product.ageGroup === filters.ageGroup) &&
        (filters.occasion === "All" || product.occasion === filters.occasion)
      );
    });
  }, [filters]);

  const colorOptions = Array.from(new Set(products.flatMap((product) => product.colors.map((color) => color.name))));

  return (
    <section id="shop" className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-4 lg:gap-8">
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Filters</p>
              <h2 className="mt-1 font-serif text-2xl text-rose-900">Find your fit</h2>
            </div>
            <Filter className="text-rose-700" size={22} />
          </div>

          <label className="mb-5 flex items-center rounded-xl border border-gray-200 px-3 py-2">
            <Search size={17} className="text-gray-400" />
            <input
              className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none"
              placeholder="Keyword search"
              value={filters.query}
              onChange={(event) => setFilters({ ...filters, query: event.target.value })}
            />
          </label>

          <FilterSelect label="Category" value={filters.category} options={["All", ...categories]} onChange={(category) => setFilters({ ...filters, category })} />
          <FilterSelect label="Size" value={filters.size} options={["All", ...sizes]} onChange={(size) => setFilters({ ...filters, size })} />
          <FilterSelect label="Color" value={filters.color} options={["All", ...colorOptions]} onChange={(color) => setFilters({ ...filters, color })} />
          <FilterSelect label="Age Group" value={filters.ageGroup} options={["All", ...ageOptions]} onChange={(ageGroup) => setFilters({ ...filters, ageGroup })} />
          <FilterSelect label="Occasion" value={filters.occasion} options={["All", ...occasions]} onChange={(occasion) => setFilters({ ...filters, occasion })} />

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Price Range</span>
              <span className="font-semibold text-rose-700">Under Rs {filters.price.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="900"
              max="5000"
              step="100"
              value={filters.price}
              onChange={(event) => setFilters({ ...filters, price: Number(event.target.value) })}
              className="w-full accent-rose-600"
            />
          </div>

          <button
            className="mt-6 w-full rounded-xl border border-amber-500 px-4 py-2.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-50"
            type="button"
            onClick={() => setFilters(initialFilters)}
          >
            Reset Filters
          </button>
        </div>
      </aside>

      <div className="lg:col-span-3">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Femiknit collection</p>
            <h2 className="mt-2 font-serif text-3xl text-rose-950 sm:text-4xl">Sarees, Kurtis and Kurtas</h2>
          </div>
          <p className="text-sm font-medium text-gray-500">{filteredProducts.length} styles matched</p>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-4 block text-sm">
      <span className="mb-2 block font-medium text-gray-700">{label}</span>
      <select
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
