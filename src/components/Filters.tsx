import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const catergoryFilterId = useId();

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, minPrice: Number(e.target.value) });
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
          min={0}
          max={2000}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={catergoryFilterId}>Category</label>
        <select
          name="category"
          id={catergoryFilterId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
