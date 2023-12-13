import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import { signOut } from "next-auth/react";

export default function DropDownProfile() {
  const router = useRouter();
  return (
    <div className={styles.dropDownProfile}>
      <div className={styles.dropDownContent}>
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
        <button
          className={styles.dropDownItem}
          onClick={() => {
            router.push(`/user/profile`);
          }}
        >
          Perfil
        </button>
      </div>
    </div>
  );
}
