import styles from "@/styles/LoginPage.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

async function handleSubmit() {
  // throw new Error("Function not implemented.");
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.login_div}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit();
          }}
          action=""
          className={styles.form}
        >
          <h1 className={styles.h1}>Entrar</h1>
          <span className={styles.input_span}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email ou Telefone"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
            />
            <span className={styles.options}>
              <a href="#">Esqueci minha senha</a>
              <a href="/register"> Não tenho cadastro</a>
            </span>
          </span>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
        
        <button
          className={styles.google_button}
          onClick={() => signIn(``, { callbackUrl: `/` })}
        >
          <img
            className={styles.icon}
            src="/images/icons/google.png"
            alt="google
        "
          />
          Continuar com o google
        </button>
      </div>
    </div>
  );
}
