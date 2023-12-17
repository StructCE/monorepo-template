import styles from "@/styles/CartProduct.module.css";
import { CartProduct, defaultCartProduct } from "@/types/types";
import { useRouter } from "next/router";
import { useState } from "react";

async function upateQuantityDB(productId: number, newQuantity: number) {
  const res = await fetch(
    `http://localhost:3000/api/user/cart/product/${productId}`,
    {
      method: "PUT",
      body: JSON.stringify({ quantity: newQuantity }),
      headers: { "Content-Type": "application/json" },
    }
  );
}

async function deleteCartProduct(productId: number) {
  const res = await fetch(
    `http://localhost:3000/api/user/cart/product/${productId}`,
    { method: "DELETE" }
  );
}

export default function ShowCartProduct(props: { cartProduct: CartProduct }) {
  if (!props.cartProduct.product) {
    return (
      <>
        <h1>Produto não registrado</h1>
      </>
    );
  }

  var quantity = Number(props.cartProduct.quantity);
  const price = Number(props.cartProduct.product.price);
  const [count, setCount] = useState(quantity);
  const router = useRouter();

  return (
    <tr className={styles.line}>
      <th className={styles.cell_product}>
        <img
          src={`/images/products/${props.cartProduct.product.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={`/images/products/${props.cartProduct.product.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          className={styles.image}
        />
        <span className={styles.product_info}>
          <h1 className={styles.name}>{props.cartProduct.product.name}</h1>
          <p className={styles.description}>
            {props.cartProduct.product.description}
          </p>
          <p className={styles.ingredients}>
            {props.cartProduct.product.ingredients}
          </p>
        </span>
      </th>
      <th>
        <span className={styles.price}>
          R${String((price * count).toFixed(2)).replace(".", ",")}
        </span>
      </th>
      <th>
        <div className={styles.quantifier}>
          <button
            className={styles.quatifier_button}
            onClick={() => {
              if (count > 1) {
                const newCount = count - 1;
                setCount(newCount);
                upateQuantityDB(props.cartProduct.productId, newCount);
              }
            }}
          >
            -
          </button>

          <span className={styles.quantity}>{count}</span>

          <button
            className={styles.quatifier_button}
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
              upateQuantityDB(props.cartProduct.productId, newCount);
            }}
          >
            +
          </button>
        </div>
      </th>
      <th>
        <span>R${String((price * count).toFixed(2)).replace(".", ",")}</span>
      </th>
      <th style={{ color: "#fff" }}>
        <button
          className={styles.trash_button}
          onClick={() => {
            if (confirm("Remover produto do carrinho?")) {
              deleteCartProduct(props.cartProduct.productId);
              router.reload();
            }
          }}
        >
          <img
            src="/images/icons/trash.png"
            alt="lixo"
            className={styles.trash}
          />
        </button>
      </th>
    </tr>
  );
}
