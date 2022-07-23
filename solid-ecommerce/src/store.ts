import { createResource, createSignal } from 'solid-js';
import { createMutable } from 'solid-js/store';

import { Product } from './product';

const CART_PRODUCTS_ITEM_KEY = "cartProducts";
export const [search, setSearch] = createSignal("");
export const cart = createMutable({
  products: JSON.parse(
    window.localStorage.getItem(CART_PRODUCTS_ITEM_KEY) || "[]"
  ) as Product[],
  get total() {
    return this.products.reduce((total, product) => total + product.price, 0);
  },
  addToCart(product: Product) {
    this.products.push(product);
    window.localStorage.setItem(
      CART_PRODUCTS_ITEM_KEY,
      JSON.stringify(this.products)
    );
  },
  clearCart() {
    this.products = [];
    window.localStorage.setItem(
      CART_PRODUCTS_ITEM_KEY,
      JSON.stringify(this.products)
    );
  },
});
export const [products] = createResource<Product[]>(
  async () => {
    const res = await fetch("http://fakestoreapi.com/products");
    return await res.json();
  },
  {
    initialValue: [],
  }
);

export const onSetSearch = (str: string) => setSearch(str);
