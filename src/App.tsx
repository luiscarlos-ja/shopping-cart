import { Products } from "./components/Products";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilters();

  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
      <Footer />
    </>
  );
}

export default App;
