// Load products from API
export const loadProducts = async () => {
  const products = await fetch("https://api.escuelajs.co/api/v1/products");
  const res = await products.json();

  return res;
};

// Load product from API by id
export const loadProductById = async (id: number) => {
  const product = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const res = await product.json();

  return res;
};
