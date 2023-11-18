import styles from "@/styles/ShowProduct.module.css";

export default function ShowProduct(produto: {
  name: string;
  description: string;
  ingredients: string;
  price: number;
}) {
  return (
    <div className={styles.card}>
      {/* <img src={produto.image} alt={produto.name} className={styles.img} /> */}
      <div className={styles.info}>
        <h1 className={styles.nome}>{produto.name}</h1>
        <p className={styles.descricao}>{produto.description}</p>
        <p className={styles.ingredientes}>{produto.ingredients}</p>
        {/* <p className={styles.ingredientes}>
          {Array.from(produto.ingredients).join(", ")}
        </p> */}
      </div>
      <h2 className={styles.preco}>R$ {produto.price}</h2>
    </div>
  );
}
