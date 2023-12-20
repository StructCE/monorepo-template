import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import { defaultUser } from "@/types/types";

export async function getCartId(userEmail: string) {
  const res = await fetch(`http://localhost:3000/api/user/${userEmail}`, {
    method: "GET",
  });

  let user = defaultUser;
  if (res.ok) user = await res.json();

  if (user && user.cart) {
    return Number(user.cart.id);
  }
  return 0;
}

export default function DropDownProfile() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className={styles.dropDownProfile}>
      <div className={styles.dropDownContent}>
        <button
          className={styles.dropDownItem}
          onClick={() => {
            router.push(`/user/profile`);
          }}
        >
          Perfil
        </button>{" "}
        {session && session.user && session.user.isOwner && (
          <button
            className={styles.dropDownItem}
            onClick={() => {
              if (session && session.user) {
                router.push(`/user/menu/${session.user.id}`);
              } else {
                alert("Faça login para acessar seu restaurante!");
                router.push(`/login`);
              }
            }}
          >
            Meu restaurante
          </button>
        )}
        <button
          className={styles.dropDownItem}
          onClick={async () => {
            if (session && session.user) {
              const cartId = Number(
                await getCartId(String(session.user.email))
              );

              router.push(`/user/cart/${cartId}`);
            }
          }}
        >
          Carrinho
        </button>
        <button
          className={styles.dropDownItem}
          onClick={() => {
            if (confirm("Deseja sair?")) {
              signOut();
            }
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
