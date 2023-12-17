export type Restaurant = {
  id: number;
  name: string;
  location: string;
  schedule: string;
  phone: string;
  description: string;
  contacts: string;
  ownerEmail: string;
  user?: User;
  menu?: Menu;
};

export type Menu = {
  id: number;
  name: string;
  restaurantId: number;
  restaurant?: Restaurant;
  categories?: Category[];
};

export type Category = {
  id: number;
  name: string;
  menuId: number;
  menu?: Menu;
  products?: Product[];
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
  category?: Category;
  cartProduct?: CartProduct[];
};

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  image: string;
  isOwner: Boolean;
  cart?: Cart;
  restaurant?: Restaurant;
};

export type Cart = {
  id: number;
  userId: number;
  user?: User;
  cartProduct?: CartProduct[];
};

export type CartProduct = {
  productId: number;
  cartId: number;
  quantity: number;
  cart?: Cart;
  product?: Product;
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
  user: undefined,
  menu: undefined,
};

export const defaultMenu: Menu = {
  id: 0,
  name: "",
  restaurantId: 0,
  restaurant: undefined,
  categories: undefined,
};

export const defaultCategory: Category = {
  id: 0,
  name: "",
  menuId: 0,
  menu: undefined,
  products: undefined,
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
  category: undefined,
  cartProduct: undefined,
};

export const defaultUser: User = {
  id: 0,
  email: "",
  name: "",
  password: "",
  image: "",
  isOwner: false,
  cart: undefined,
  restaurant: undefined,
};

export const defaultCart: Cart = {
  id: 0,
  userId: 0,
  user: undefined,
  cartProduct: undefined,
};

export const defaultCartProduct: CartProduct = {
  productId: 0,
  cartId: 0,
  quantity: 0,
  cart: undefined,
  product: undefined,
};
