import axios from "axios";
// get all products

export async function getProducts(page: number) {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=30`
  );
  return data;
}

export async function getProduct(id: number) {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  return data;
}

export async function getCategories() {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return data;
}
