import { Product, Category } from "@/types/types";
import Card from "./Card";
import styles from "@/styles/Menu.module.css";

export default function ShowCategory({ categoria }: { categoria: Category }) {
  console.log(categoria);
  return (
    <>
      <h2>{categoria.name}</h2>
      <div className={styles.categoria}>
        {categoria.products.map((produto) => {
          return (
            <Card
              name={produto.name}
              image={produto.image}
              ingredients={produto.ingredients}
              price={produto.price}
              id={produto.id}
              discount={produto.discount}
            />
          );
        })}
      </div>
    </>
  );
}
