import styles from "@/styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import LoginGoogle from "./LoginGoogle";
import { prisma } from "../../prisma/prisma";
import { useRouter } from "next/router";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav className={styles.nav_div}>
      <div className={styles.logo_div}>
        <img
          src="/images/assets/logomark.png"
          alt="fazgostoso"
          className={styles.logo}
          onClick={() => {
            router.push(`/`);
          }}
        />
      </div>
      <div className={styles.actions_div}>
        <div className={styles.actions}>
          <button onClick={() => {}} className={styles.button}>
            Sobre
          </button>

          <button onClick={() => {}} className={styles.button}>
            Contato
          </button>

          <button
            onClick={() => {
              if (session && session.user) {
                router.push(`/user/menu/${session.user.email}`);
              } else {
                alert("Faça login para acessar seu restaurante!");
                router.push(`/login`);
              }
            }}
            className={styles.button}
          >
            Restaurante
          </button>

          <LoginGoogle />
        </div>
      </div>
    </nav>
  );
}
