import { useContext } from "react";
import { FilterContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(
    FilterContext
  ) as FilterContextType;

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}
