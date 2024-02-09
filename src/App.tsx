import { Products } from "./components/Products";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/cart";
import { Cart } from "./components/Cart";

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      <Footer />
    </CartProvider>
  );
}

export default App;
