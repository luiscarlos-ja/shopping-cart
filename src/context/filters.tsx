import { createContext, useState } from "react";

export const FilterContext = createContext<FilterContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterProducts>({
    category: "all",
    minPrice: 0,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
