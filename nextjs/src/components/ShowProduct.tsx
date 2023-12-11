import styles from "@/styles/ShowProduct.module.css";

export default function ShowProduct(props: {
  name: string;
  description: string;
  ingredients: string;
  price: number;
}) {
  return (
    <div className={styles.card}>
      {/* <img src={props.image} alt={props.name} className={styles.img} /> */}
      <div className={styles.info}>
        <h1 className={styles.nome}>{props.name}</h1>
        <p className={styles.descricao}>{props.description}</p>
        <p className={styles.ingredientes}>{props.ingredients}</p>
        {/* <p className={styles.ingredientes}>
          {Array.from(props.ingredients).join(", ")}
        </p> */}
      </div>
      <h2 className={styles.preco}>R$ {props.price}</h2>
    </div>
  );
}
