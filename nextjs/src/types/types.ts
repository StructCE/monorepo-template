export type Restaurant = {
  id: number;
  name: string;
  location: string;
  schedule: string;
  phone: string;
  description: string;
  contacts: string;
  ownerEmail: string;
  user: null | User;
  menu: null | Menu;
};

export type Menu = {
  id: number;
  name: string;
  restaurantId: number;
  restaurant: null | Restaurant;
  categories: null | Category[];
};

export type Category = {
  id: number;
  name: string;
  menuId: number;
  menu: null | Menu;
  products: null | Product[];
};

export type Product = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  discount: number;
  description: string;
  image: string;
  categoryId: number;
  category: null | Category;
  cartProduct: null | CartProduct[];
};

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  image: string;
  isOwner: Boolean;
  cart: null | Cart;
  restaurant: null | Restaurant;
};

export type Cart = {
  id: number;
  userId: number;
  user: null | User;
  cartProduct: null | CartProduct[];
};

export type CartProduct = {
  id: number;
  cartId: number;
  productId: number;
  restaurantId: number;
  quantity: number;
  cart: null | Cart;
  product: null | Product;
  restaurant: null | Restaurant;
};

//----------------------------------------------------------------------------//
export const defaultRestaurant: Restaurant = {
  id: 0,
  name: "",
  location: "",
  schedule: "",
  phone: "",
  description: "",
  contacts: "",
  ownerEmail: "",
  user: null,
  menu: null,
};

export const defaultMenu: Menu = {
  id: 0,
  name: "",
  restaurantId: 0,
  restaurant: null,
  categories: null,
};

export const defaultCategory: Category = {
  id: 0,
  name: "",
  menuId: 0,
  menu: null,
  products: null,
};

export const defaultProduct: Product = {
  id: 0,
  name: "",
  ingredients: "",
  price: 0,
  discount: 0,
  description: "",
  image: "",
  categoryId: 0,
  category: null,
  cartProduct: null,
};

export const defaultUser: User = {
  id: 0,
  email: "",
  name: "",
  password: "",
  image: "",
  isOwner: false,
  cart: null,
  restaurant: null,
};

export const defaultCart: Cart = {
  id: 0,
  userId: 0,
  user: null,
  cartProduct: null,
};

export const defaultCartProduct: CartProduct = {
  id: 0,
  productId: 0,
  cartId: 0,
  restaurantId: 0,
  quantity: 0,
  cart: null,
  product: null,
  restaurant: null,
};
