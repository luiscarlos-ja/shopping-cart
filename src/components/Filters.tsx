import { useId, useState } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const catergoryFilterId = useId();

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
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
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={catergoryFilterId}>Category</label>
        <select
          name="category"
          id={catergoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
