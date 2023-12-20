import styles from "@/styles/CartProduct.module.css";
import { CartProduct, defaultCartProduct } from "@/types/types";
import { useRouter } from "next/router";
import { useState } from "react";

async function upateQuantityDB(props: {
  cartProductId: number;
  newQuantity: number;
}) {
  console.log(props);
  const res = await fetch(
    `http://localhost:3000/api/user/cart/product/${props.cartProductId}`,
    {
      method: "PUT",
      body: JSON.stringify({ quantity: props.newQuantity }),
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
  if (!props.cartProduct.product || !props.cartProduct.restaurant) {
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
      <th className={styles.coluna0}>
        <img
          className={styles.restaurant_logo}
          src={`/images/restaurants/${props.cartProduct.restaurant.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={`/images/restaurants/${props.cartProduct.restaurant.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          onClick={() => {
            router.push(`/restaurant/menu/${props.cartProduct.restaurant?.id}`);
          }}
        />
      </th>
      <th className={styles.coluna1}>
        {/* <img
          src={`/images/products/${props.cartProduct.product.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={`/images/products/${props.cartProduct.product.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          className={styles.product_image}
        /> */}
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
      <th className={styles.coluna2}>
        <span className={styles.price}>
          R${String(price.toFixed(2)).replace(".", ",")}
        </span>
      </th>
      <th className={styles.coluna3}>
        <div className={styles.quantifier}>
          <button
            className={styles.button}
            onClick={() => {
              if (count > 1) {
                const newCount = count - 1;
                setCount(newCount);
                upateQuantityDB({
                  cartProductId: props.cartProduct.id,
                  newQuantity: newCount,
                });
              }
            }}
          >
            <p className={styles.p}>-</p>
          </button>

          <span className={styles.quantity}>{count}</span>

          <button
            className={styles.button}
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
              upateQuantityDB({
                cartProductId: props.cartProduct.productId,
                newQuantity: newCount,
              });
            }}
          >
            <p className={styles.p}>+</p>
          </button>
        </div>
      </th>
      <th className={styles.coluna4}>
        <span>R${String((price * count).toFixed(2)).replace(".", ",")}</span>
      </th>
      <th className={styles.coluna5}>
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
