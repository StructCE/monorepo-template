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
      <a className={styles.img_logo}>
        <Image src={logo} height={110} alt=""></Image>
      </a>
      <ul className={styles.ul_r}>
        <li className={styles.li}>Contato</li>
        {/* <li className={styles.li}>Carrinho</li> */}
        <li className={styles.li}>
          <NavbarLogin />
        </li>

        {/* <a className={styles.img_login}>
          <Image src={login} height={35} alt=""></Image>
        </a> */}
      </ul>
    </nav>
  );
}
