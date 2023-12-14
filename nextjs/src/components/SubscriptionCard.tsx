import styles from "@/styles/SubscriptionCard.module.css";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SubscriptionCard() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  function handleSubmit() {
    if (name && email) {
      // alert(`/register?email=${email}&name=${name}`);
      router.push({
        pathname: `/register`,
        query: { name, email },
      });
    } else alert("Preencha todos os campos!");
  }

  return (
    <div>
      <form
        className={styles.form}
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
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
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}
