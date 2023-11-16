import styles from "@/styles/SubscriptionCard.module.css";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SubscriptionCard() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("registrar");
    router.push("/menu")
  }

  return (
    <div>
      <form
        className={styles.form}
        action="subscription_start"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="name">
            Seu nome:
          </label>
          <input
            className={styles.input}
            type="name"
            aria-label="Seu nome:"
            placeholder="Clique para escrever"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            placeholder="Clique para escrever"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}
