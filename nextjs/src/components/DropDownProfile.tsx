import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import { getCartId } from "./oldShowProduct";

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
