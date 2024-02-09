interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface FilterProducts {
  category: string;
  minPrice: number;
}

interface FilterContextType {
  filters: FilterProducts;
  setFilters: React.Dispatch<React.SetStateAction<FilterProducts>>;
}

interface CartContextType {
  cart: Cart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

interface Cart {
  product: Product;
  quantity: number;
}
