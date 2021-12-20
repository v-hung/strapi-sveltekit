import { writable } from 'svelte/store';

export const user = writable(null);

export const model = writable({
  money: false,
  language: false,
  user: false,
  search: false,
  cart: false
})

export const error404 = writable(false);

export const breadcrumb = writable({
  title: ``,
  description: ``,
  data: []
})
