import styles from "@/styles/LoginPage.module.css"
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <button onClick={() => signIn()} className={styles.button}>
        Entrar 
      </button>
    </>
  );
}
