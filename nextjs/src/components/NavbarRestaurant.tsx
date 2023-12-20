import Image from "next/image";
import styles from "@/styles/NavbarRestaurant.module.css";

import login from "/public/images/login-cardapio.png";
import logo from "/public/images/logo_sushispace.png";
import { Restaurant } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NavbarLogin from "./NavbarLogin";

export default function NavbarRestaurant(props: {
  restaurant: Restaurant | undefined;
}) {
  if (!props.restaurant) return null;

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul_l}>
        <li className={styles.li}>Cardápio</li>
        <li className={styles.li}>Unidades</li>
      </ul>
      <a className={styles.image_container}>
        {/* <Image src={logo} height={110} alt=""></Image> */}
        <img
          src={`/images/restaurants/${props.restaurant.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={props.restaurant.name.toLowerCase().replaceAll(" ", "_")}
        />
      </a>
      <ul className={styles.ul_r}>
        <li className={styles.li}>Contato</li>
        <li
          className={styles.li}
          onClick={() => {
            if (session && session.user) {
              router.push(`/user/cart/${session?.user.id}`);
            } else {
              alert("Faça login para acessar o carrinho");
            }
          }}
        >
          Carrinho
        </li>
      </ul>
    </nav>
  );
}
