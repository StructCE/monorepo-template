import styles from "@/styles/ShowProduct.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

async function postCartProdut(props: { productId: number; cartId: number }) {
  const res = await fetch(
    `http://localhost:3000/api/user/cart/product/${props.productId}`,
    {
      method: "POST",
      body: JSON.stringify({ cartId: props.cartId }),
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function getCartId(userEmail: string) {
  const res = await fetch(`http://localhost:3000/api/user/${userEmail}`, {
    method: "GET",
  });
  const userData = await res.json();
  return Number(userData.cart.id);
}

export default function ShowProduct({ product }: any) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className={styles.card}>
      {/* <img src={product.image} alt={product.name} className={styles.img} /> */}
      <div className={styles.info}>
        <h1 className={styles.nome}>{product.name}</h1>
        <p className={styles.descricao}>{product.description}</p>
        <p className={styles.ingredientes}>{product.ingredients}</p>
        {/* <p className={styles.ingredientes}>
          {Array.from(product.ingredients).join(", ")}
        </p> */}
      </div>
      <h2 className={styles.preco}>R$ {product.price + ",00"}</h2>
      <button
        className={styles.action}
        onClick={async () => {
          if (session && session.user) {
            const productId = Number(product.id);
            const cartId = Number(await getCartId(String(session.user.email)));
            // console.log(productId, cartId);
            if (confirm("Adicionar produto ao carrinho?")) {
              postCartProdut({ cartId: cartId, productId: productId });
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
