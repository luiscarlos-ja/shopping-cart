import { createContext, useState } from "react";

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      { product: { ...product }, quantity: 1 },
    ]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevState) =>
      prevState.filter((item) => item.product.id !== product.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
