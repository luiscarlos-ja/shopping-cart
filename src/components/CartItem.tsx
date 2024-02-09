type Props = {
  cartItem: Cart;
  addToCart: CartContextType["addToCart"];
};

export function CartItem({ cartItem, addToCart }: Props) {
  return (
    <li>
      <img src={cartItem.product.thumbnail} alt={cartItem.product.title} />
      <div>
        <strong>{cartItem.product.title}</strong> - ${cartItem.product.price}
      </div>

      <footer>
        <small>Qty: {cartItem.quantity}</small>
        <button
          onClick={() => {
            addToCart(cartItem.product);
          }}
        >
          +
        </button>
      </footer>
    </li>
  );
}
