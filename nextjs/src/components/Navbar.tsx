import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [loginButton, setLoginButton] = useState(false);

  return (
    <nav className={styles.nav_div}>
      <div className={styles.logo_div}>
        <Link href="/">
          <img
            src="images/logomark.png"
            alt="fazgostoso"
            className={styles.logomark}
          />
        </Link>
      </div>
      <div className={styles.actions_div}>
        <ul className={styles.actions}>
          <li>
            <Link href="/sobre" className={styles.link}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className={styles.link}>
              Contato
            </Link>
          </li>
          <li>
            {!loginButton && (
              <span>
                <Link href="/user" className={styles.link}>Login</Link>
              </span>
            )}
            {loginButton && (
              <span>
                <Link href="/restaurant" className={styles.link}>
                  Meu Restaurante
                </Link>{" "}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
