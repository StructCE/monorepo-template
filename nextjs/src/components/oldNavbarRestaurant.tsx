// import styles from "@/styles/Navbar.module.css";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import NavbarLogin from "./NavbarLogin";
// import { Restaurant } from "@/types/types";

// export default function NavbarRestaurant(props: {
//   restaurant: Restaurant | undefined;
// }) {
//   if (!props.restaurant) return null;

//   const { data: session } = useSession();
//   const router = useRouter();

//   return (
//     <nav className={styles.nav_div_res}>
//       <button onClick={() => {}} className={styles.button}>
//         Cardápio
//       </button>

//       <button onClick={() => {}} className={styles.button}>
//         Filiais
//       </button>

//       <div className={styles.logo_div}>
//         <img
//           src={`/images/restaurants/${String(props.restaurant.name)
//             .toLowerCase()
//             .replaceAll(" ", "_")}.png`}
//           alt={String(props.restaurant.name).toLowerCase().replaceAll(" ", "_")}
//           className={styles.logo_restaurant}
//           // onClick={() => {
//           //   router.push(`/`);
//           // }}
//         />
//       </div>

//       <button onClick={() => {}} className={styles.button}>
//         Contato
//       </button>

//     </nav>
//   );
// }
