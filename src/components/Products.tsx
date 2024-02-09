import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Products.css";

type Props = {
  products: Product[];
};

export function Products({ products }: Props) {
  const { addToCart, removeFromCart, cart } = useCart() as CartContextType;

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.product.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductIncCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  className={isProductIncCart ? "button-added" : ""}
                  onClick={() =>
                    isProductIncCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductIncCart ? (
                    <RemoveFromCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
              <p></p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
