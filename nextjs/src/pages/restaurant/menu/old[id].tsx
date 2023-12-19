// import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { useRouter } from "next/router";
// import ShowProduct from "@/components/ShowProduct";
// import NavbarRestaurant from "@/components/NavbarRestaurant";
// import { Category, Menu, Product, defaultMenu } from "@/types/types";

// export const getServerSideProps: GetServerSideProps<{
//   menu: Menu;
// }> = async (context) => {
//   const menuId = context.query.id;
//   const res = await fetch(
//     `http://localhost:3000/api/restaurant/menu/${menuId}`,
//     { method: "GET" }
//   );

//   let menu = defaultMenu;

//   if (res.ok) {
//     menu = await res.json();
//   }

//   return { props: { menu } };
// };

// export default function MenuPage({
//   menu,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const router = useRouter();

//   if (menu.id === 0 || !menu.restaurant) {
//     return (
//       <div>
//         <h1>Cardápio não encontrado</h1>
//       </div>
//     );
//   } else {
//     const restaurantId = Number(menu.restaurant.id);
//     return (
//       <div>
//         <NavbarRestaurant restaurant={menu.restaurant} />
//         <div className="menu">
//           <h1>{menu.name}</h1>
//           <h1>Restaurante: {router.query.id}</h1>
//         </div>
//         <div>
//           {menu.categories &&
//             menu.categories.map((categoria: Category) => {
//               return (
//                 <div>
//                   <h2>{categoria.name}</h2>
//                   {categoria.products &&
//                     categoria.products.map((produto: Product) => {
//                       return (
//                         <div>
//                           <ShowProduct
//                             product={produto}
//                             restaurantId={Number(restaurantId)}
//                           />
//                         </div>
//                       );
//                     })}
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }
