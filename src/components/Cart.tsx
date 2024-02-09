import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export function Cart() {
  const cartCheckBoxId = useId();
  const { clearCart, cart, addToCart } = useCart() as CartContextType;

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckBoxId} />
      <aside className="cart">
        <ul>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.product.id}
              addToCart={() => addToCart(cartItem.product)}
              cartItem={cartItem}
            />
          ))}
        </ul>
        <button className="button-clear" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
