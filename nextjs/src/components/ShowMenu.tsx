// import { Product } from "@/types/types";
// import { Menu } from "../../prisma/prisma";
// import Card from "./Card";
// import styles from "@/styles/Menu.module.css";

// export default function ShowCategory({ menu }: { menu: any }) {
//   // console.log(categoria);
//   return (
//     <>
//       {menu.categories.map((categoria: any) => {
//         return (
//           <>
//             {categoria.products.map((produto: any) => {
//               <Card produto={produto} />;
//             })}
//           </>
//         );
//       })}
//     </>
//   );
// }

// const jason = {
//   id: 2,
//   restaurantId: 2,
//   name: "Pizzas",
//   categories: [
//     {
//       id: 3,
//       menuId: 2,
//       name: "Pizzas",
//       products: [
//         {
//           id: 9,
//           categoryId: 3,
//           name: "Calabresa",
//           ingredients: "Ingredients 1",
//           price: 10,
//           discount: 0,
//           description: 'Description 1"',
//         },
//         {
//           id: 10,
//           categoryId: 3,
//           name: "Quatro queijos",
//           ingredients: "Ingredients 2",
//           price: 11,
//           discount: 0,
//           description: 'Description 2"',
//         },
//         {
//           id: 11,
//           categoryId: 3,
//           name: "Portuguesa",
//           ingredients: "Ingredients 3",
//           price: 12,
//           discount: 0,
//           description: 'Description 3"',
//         },
//         {
//           id: 12,
//           categoryId: 3,
//           name: "Frango com catupiry",
//           ingredients: "Ingredients 4",
//           price: 13,
//           discount: 0,
//           description: 'Description 4"',
//         },
//       ],
//     },
//     {
//       id: 4,
//       menuId: 2,
//       name: "Bebidas",
//       products: [
//         {
//           id: 13,
//           categoryId: 4,
//           name: "Coca-cola",
//           ingredients: "Ingredients 1",
//           price: 10,
//           discount: 0,
//           description: 'Description 1"',
//         },
//         {
//           id: 14,
//           categoryId: 4,
//           name: "Suco",
//           ingredients: "Ingredients 2",
//           price: 11,
//           discount: 0,
//           description: 'Description 2"',
//         },
//         {
//           id: 15,
//           categoryId: 4,
//           name: "Água",
//           ingredients: "Ingredients 3",
//           price: 12,
//           discount: 0,
//           description: 'Description 3"',
//         },
//         {
//           id: 16,
//           categoryId: 4,
//           name: "Guaraná",
//           ingredients: "Ingredients 4",
//           price: 13,
//           discount: 0,
//           description: 'Description 4"',
//         },
//       ],
//     },
//   ],
// };
