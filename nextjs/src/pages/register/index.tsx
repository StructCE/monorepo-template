import styles from "@/styles/Register.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterPage() {
  const data = useRouter().query;
  const [email, setEmail] = useState(data.email);
  const [name, setName] = useState(data.name);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.register_div}>
        <form className={styles.form} action="">
          <div className={styles.user_info}>
            <h1 className={styles.h1}>Informações pessoais</h1>
            <span className={styles.span_input}>
              <label htmlFor="">Email:</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
                className={styles.input}
                type="email"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Nome:</label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Senha:</label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className={styles.input}
                type="password"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Repita sua senha:</label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                className={styles.input}
                type="password"
                placeholder="Digite aqui"
              />
            </span>
          </div>

          <div className={styles.restaurant_info}>
            <h1 className={styles.h1}>Informações:</h1>
            <span className={styles.span_input}>
              <label htmlFor="">Nome do restaurante:</label>
              <input
                onChange={(event) => {
                  setRestaurantName(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Endereço:</label>
              <input
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Telefone:</label>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Contato:</label>
              <input
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Descrição</label>
              <input
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
          </div>

          <button className={styles.submit_button} type="submit">
            Registrar restaurante
          </button>
        </form>
      </div>
    </div>
  );
}
