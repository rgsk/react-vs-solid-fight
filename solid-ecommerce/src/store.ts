import { createResource, createSignal } from 'solid-js';
import { createMutable } from 'solid-js/store';

import { Product } from './product';

export const [search, setSearch] = createSignal("");
export const cart = createMutable({
  products: [] as Product[],
  get total() {
    return this.products.reduce((total, product) => total + product.price, 0);
  },
  addToCart(product: Product) {
    this.products.push(product);
  },
  clearCart() {
    this.products = [];
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
