import styles from "@/styles/CartProduct.module.css";
import { useState } from "react";

//dar update nas quantidades do produto no bd

export default function CartProduct(props: {
  name: string;
  price: number;
  quantity: number;
  ingredients: string;
  description: string;
  discount?: number;
}) {
  var quantity = Number(props.quantity);
  const price = Number(props.price);

  const [count, setCount] = useState(quantity);
  // const handleInputChange = (inputValue: number) => {
  //   if (!isNaN(inputValue)) {
  //      if (inputValue > 10) {
  //       setCount(10);
  //     } else {
  //       setCount(inputValue);
  //     }
  //   }
  // };

  return (
    <tr className={styles.line}>
      <th className={styles.cell_product}>
        <img
          src={`/images/products/${props.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={`/images/products/${props.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          className={styles.image}
        />
        <span className={styles.product_info}>
          <h1 className={styles.name}>{props.name}</h1>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.ingredients}>{props.ingredients}</p>
        </span>
      </th>
      <th>
        <span className={styles.price}>
          R${String(props.price).replace(".", ",")}
        </span>
      </th>
      <th>
        <div className={styles.quantifier}>
          <button
            className={styles.quatifier_button}
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            {"-"}
          </button>
          {/* <span>
            <input
              type="quantity"
              value={count}
              onChange={(event) => {
                handleInputChange(Number(event.target.value));
              }}
            />
          </span> */}
          <span className={styles.quantity}>{count}</span>
          <button
            className={styles.quatifier_button}
            onClick={() => {
              if (count < 10) {
                setCount(count + 1);
              }
            }}
          >
            {"+"}
          </button>
        </div>
      </th>
      <th>
        <span>R${String((price * count).toFixed(2)).replace(".", ",")}</span>
      </th>
      <th style={{ color: "#fff" }}>
        <button className={styles.trash_button}>
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
