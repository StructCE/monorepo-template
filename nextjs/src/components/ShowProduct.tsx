import styles from "@/styles/ShowProduct.module.css";
import { Product } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function postCartProdut(props: {
  productId: number;
  cartId: number;
  restaurantId: number;
}) {
  const res = await fetch(`http://localhost:3000/api/user/cart/product/0`, {
    method: "POST",
    body: JSON.stringify({
      productId: props.productId,
      cartId: props.cartId,
      restaurantId: props.restaurantId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    alert(JSON.stringify(data));
  }
}

export async function getCartId(userEmail: string) {
  const res = await fetch(`http://localhost:3000/api/user/${userEmail}`, {
    method: "GET",
  });
  const userData = await res.json();
  return Number(userData.cart.id);
}

export default function ShowProduct(props: {
  product: Product;
  restaurantId: number;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h1 className={styles.nome}>{props.product.name}</h1>
        <p className={styles.descricao}>{props.product.description}</p>
        <p className={styles.ingredientes}>{props.product.ingredients}</p>
      </div>
      <h2 className={styles.preco}>R$ {props.product.price + ",00"}</h2>
      <button
        className={styles.action}
        onClick={async () => {
          if (session && session.user) {
            const productId = props.product.id;
            const restaurantId = props.restaurantId;
            const cartId = Number(await getCartId(String(session.user.email)));
            if (confirm("Adicionar produto ao carrinho?")) {
              postCartProdut({
                cartId: cartId,
                productId: productId,
                restaurantId: restaurantId,
              });
            }
          } else {
            alert("Faça login para acessar adicionar produtos ao carrinho!");
            router.push(`/api/auth/signin`);
          }
        }}
      >
        <img
          src="/images/icons/cart.png"
          alt="add_to_cart"
          className={styles.action_icon}
        />
      </button>
    </div>
  );
}
