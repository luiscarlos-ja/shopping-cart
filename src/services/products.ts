const PRODUCTS_URL = "https://dummyjson.com/products";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(PRODUCTS_URL);
    const products = (await res.json()).products as Product[];
    return products?.map((product) => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      category: product.category,
      brand: product.brand,
      description: product.description,
      discountPercentage: product.discountPercentage,
      images: product.images,
      rating: product.rating,
      stock: product.stock,
    }));
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
