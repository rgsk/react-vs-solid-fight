import { createResource, createSignal } from 'solid-js';

import { Product } from './product';

export const [search, setSearch] = createSignal("");
export const [cart, setCart] = createSignal<Product[]>([]);
export const [products] = createResource<Product[]>(
  async () => {
    const res = await fetch("http://fakestoreapi.com/products");
    return await res.json();
  },
  {
    initialValue: [],
  }
);
export const onClearCart = () => {
  setCart([]);
};
export const onSetSearch = (str: string) => setSearch(str);
export const onAddToCart = (p: Product) => setCart([...cart(), p]);
