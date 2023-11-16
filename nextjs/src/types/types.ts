// export type Product = {
//   map(arg0: (produtos: Product) => import("react").JSX.Element): import("react").ReactNode;
//   id: number;
//   name: string;
//   description: string;
//   ingredients: string;
//   price: number;
//   discount: number;
//   image: string;
// };

export type Product = {
  map(arg0: (produtos: Product) => import("react").JSX.Element): import("react").ReactNode;
  name: string;
  descricao: string;
  ingredientes: string;
  preco: number;
};

export type Category = {
  map(arg0: (categoria: Category) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  products: Product[];
};

export type Menu = {
  id: number;
  categories: Category[];
};
