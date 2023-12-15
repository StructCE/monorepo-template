`use client`;

import CartProduct from "@/components/CartProduct";
import { getCartId } from "@/components/ShowProduct";
import styles from "@/styles/Cart.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps<{
  cart: any;
}> = async (context) => {
  const cartId = context.query.cartId;
  const res = await fetch(`http://localhost:3000/api/user/cart/${cartId}`, {
    method: "GET",
  });

  let cart = {};
  if (res.ok) {
    cart = await res.json(); // Call response.json() to parse JSON
  }

  return { props: { cart } };
};

async function deleteAllCartProducts(cartId: number) {
  const res = await fetch(`http://localhost:3000/api/user/cart/${cartId}`, {
    method: "DELETE",
  });
}

export default function CartPage({
  cart,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();

  if (JSON.stringify(cart) === "{}") {
    // router.push(`/`)
    // alert("Carrinho não encontrado")
    return (
      <div>
        <h1>Carrinho não encontrado</h1>
      </div>
    );
    
  }

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (session && session.user && session.user.id !== cart.user.id) {
    router.push(`/user/cart/${session.user.id}`);
  }

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.page}>
        <div>
          <h1>MEU CARRINHO</h1>
        </div>
        {JSON.stringify(cart.cartProduct) !== "[]" ? (
          <div className={styles.produtos}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.table_header}>
                  <th className={styles.coluna1}>PRODUTO</th>
                  <th className={styles.coluna2}>PREÇO</th>
                  <th className={styles.coluna3}>QUANTIDADE</th>
                  <th className={styles.coluna4}>TOTAL</th>
                  <th className={styles.coluna5}>
                    <button
                      className={styles.trash_button}
                      onClick={() => {
                        if (
                          confirm("Deseja remover todos produtos do carrinho?")
                        ) {
                          deleteAllCartProducts(cart.id);
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

                {cart.cartProduct.map((cartProduct: any) => {
                  return <CartProduct cartProduct={cartProduct} />;
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>Adicione produtos ao carrinho</h2>
            <button>Pesquisar restaurantes</button>
          </div>
        )}
      </div>
    );
  }
}
