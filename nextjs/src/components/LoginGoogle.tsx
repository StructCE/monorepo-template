"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import DropDownProfile from "./DropDownProfile";

export default function SigninButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const [openDropdown, setOpenDropDown] = useState(false);

  if (session && session.user) {
    return (
      <div className={styles.icon_div}>
        <img
          onClick={() => {
            setOpenDropDown((prev) => !prev);
          }}
          className={styles.user_icon}
          src={String(session.user.image)}
          alt={String(session.user.name)}
        />
        {openDropdown && <DropDownProfile />}
      </div>
    );
  }
  return (
    <button
      onClick={() => {
        router.push(`/login`);
      }}
      className={styles.button}
    >
      Entrar
    </button>
    // <button onClick={() => signIn()} className={styles.button}>
    //   Entrar
    // </button>
  );
}
