import CartProduct from "@/components/CartProduct";
import styles from "@/styles/Cart.module.css";

export default function CartPage() {
  return (
    <div className={styles.page}>
      <div>
        <h1>MEU CARRINHO</h1>
      </div>
      <div className={styles.produtos}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.table_header}>
              <th className={styles.coluna1}>PRODUTO</th>
              <th className={styles.coluna2}>PREÇO</th>
              <th className={styles.coluna3}>QUANTIDADE</th>
              <th className={styles.coluna4}>TOTAL</th>
              <th className={styles.coluna5}>
                <button className={styles.trash_button}>
                  <img
                    src="/images/icons/trash.png"
                    alt="lixo"
                    className={styles.trash}
                  />
                </button>
              </th>
            </tr>
            <CartProduct
              name="Pizza de Calabresa completa"
              description="A melhor pizza de calabresa do DF."
              ingredients="Queijo, Calabresa, Orégano, Cebola, Azeitona"
              price={34.99}
              quantity={3}
            />
            <CartProduct
              name="Pizza de Calabresa completa"
              ingredients="Queijo, Calabresa, Orégano, Cebola, Azeitona"
              price={34.99}
              quantity={3}
              description="A melhor pizza de calabresa do DF."
            />
            <CartProduct
              name="Pizza de Calabresa completa"
              ingredients="Queijo, Calabresa, Orégano, Cebola, Azeitona"
              price={34.99}
              quantity={3}
              description="A melhor pizza de calabresa do DF."
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
