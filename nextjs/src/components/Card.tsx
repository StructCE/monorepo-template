import styles from "@/styles/Card.module.css";
import { Product } from "@/types/types";
import { join } from "path";

// 
// export default function Card({produto}: {produto:Product}) {
//   return (
//     <div className={styles.card}>
//       <img src={produto.image} alt={produto.name} className={styles.img} />
//       <div className={styles.info}>
//         <h1 className={styles.nome}>{produto.name}</h1>
//         <p className={styles.descricao}>{produto.ingredients}</p>
//       </div>
//       <h2 className={styles.preco}>R$ {produto.price}</h2>
//     </div>
//   );
// }

export default function Card({produto}: {produto:Product}) {
  return (
    <div className={styles.card}>
      {/* <img src={produto.image} alt={produto.name} className={styles.img} /> */}
      <div className={styles.info}>
        <h1 className={styles.nome}>{produto.name}</h1>
        <p className={styles.descricao}>{produto.descricao}</p>
        <p className={styles.ingredientes}>{Array.from(produto.ingredientes).join(", ")}</p>
      </div>
      <h2 className={styles.preco}>R$ {produto.preco}</h2>
    </div>
  );
}