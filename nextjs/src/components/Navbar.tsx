import styles from "@/styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import { useState } from "react";
import LoginGoogle from "./LoginGoogle";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.nav_div}>
      <div className={styles.logo_div}>
        <img
          src="/images/assets/logomark.png"
          alt="fazgostoso"
          className={styles.logo}
          onClick={() => {
            window.location.href = `/`;
          }}
        />
      </div>
      <div className={styles.actions_div}>
        <ul className={styles.actions}>
          <li>
            <button onClick={() => {}} className={styles.button}>
              Sobre
            </button>
          </li>
          <li>
            <button onClick={() => {}} className={styles.button}>
              Contato
            </button>
          </li>
          <li>
            <LoginGoogle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
