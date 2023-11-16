// import Card from "@/components/Card";
// import ShowCategory from "@/components/ShowCategory";
// import ShowMenu from "@/components/ShowCategory";
// import { Category, Menu, Product } from "@/types/types";
// import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { useRouter } from "next/router";
// import { ReactElement } from "react";

// // export const getServerSideProps: GetServerSideProps<{
// //   restaurantMenu: Menu;
// // }> = async (context) => {
// //   const { restaurant_id } = context.query;
// //   const res = await fetch(``);
// //   const restaurantMenu = await res.json();
// //   return { props: { restaurantMenu } };
// // };

// // export function ShowCategory(restaurantMenu: Menu) {
// //   let categories = Array.from(restaurantMenu.data.keys());
// //   let menuDiv = [];
// //   let categoryDiv = [];

// //   for (let i = 0; i < categories.length; i++) {
// //     let products = restaurantMenu.data.get(categories[i]);
// //     if (products) {
// //       for (let p of products) {
// //         categoryDiv.push(
// //           <Card
// //             image={p.image}
// //             id={p.id}
// //             name={p.name}
// //             ingredients={p.ingredients}
// //             price={p.price}
// //             discount={p.discount}
// //           />
// //         );
// //       }
// //     }
// //     menuDiv.push(
// //       <div>
// //         <h2>categories[i]</h2>
// //         categoryDiv
// //       </div>
// //     );
// //     categoryDiv = [];
// //   }

// //   return menuDiv;
// // };

// // for () {
// //   let produtos = restaurantMenu.data.get(categories[i]);
// //   if (produtos)
// //     for (let p of produtos) {
// //        <Card name="" />;
// //     }
// // }

// // export default function MenuPage({
// //   restaurantMenu,
// // }: InferGetServerSidePropsType<typeof getServerSideProps>) {
// //   const router = useRouter();

// //   return (
// //     <div className="menu">
// //       <h1>Cardápio</h1>
// //       ShowCategory()
// //     </div>
// //   );
// // }

// let burger: Product = {
//   id: 1,
//   name: "Burger",
//   ingredients: "Bun, Patty, Lettuce, Tomato",
//   price: 5.99,
//   discount: 0.1,
//   image: "images/pizza.jpg",
// };

// let fries: Product = {
//   id: 2,
//   name: "Fries",
//   ingredients: "Potatoes, Salt",
//   price: 2.99,
//   discount: 0,
//   image: "images/pizza.jpg",
// };
// // Create a category
// let fastFood: Category = {
//   id: 1,
//   name: "Fast Food",
//   products: [burger, fries],
// };

// // Create a menu
// let menu: Menu = {
//   id: 1,
//   categories: [fastFood],
// };

// export default function MenuPage() {
//   return (
//     <div>
//       <div className="menu">
//         {menu.categories.map((categoria) => (
//           <ShowCategory categoria={categoria} />
//         ))}
//       </div>
//       <div className="contacts"></div>
//       <div></div>
//     </div>
//   );
// }
