import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer_div}>
      <div className={styles.div}>
        <h1 className={styles.h1}>Sobre nós</h1>
        <p className={styles.text}>
          A <b>Faz Gostoso</b> é uma ferramenta dedicada à criação de cardápios
          para restaurantes desde 2023. Nosso objetivo é fazer cardápios, de
          maneira profissional, com foco em agradar as necessidades dos
          clientes, profissionalmente.
        </p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Recursos</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="" className={styles.a}>
              Navegar
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="" className={styles.a}>
              Meu Restaurante
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="" className={styles.a}>
              Criar cardápio
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="" className={styles.a}>
              Criar conta
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Contate-nos</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            {/* <img className={styles.contact_icon} src="images/phone.png" alt="phone_icon" /> */}
            +55 61 91234-5678
          </li>
          <li className={styles.li}>
            {/* <img className={styles.contact_icon} src="images/email.png" alt="email_icon" /> */}
            fazgostoso.help@gmail.com
          </li>
          <li className={styles.li}>
            {/* <img className={styles.contact_icon} src="images/place.png" alt="place_icon" /> */}
            SQN 406 Bloco A, Brasília, DF
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Nossas redes</h1>
        <ul className={styles.ul_social}>
          <li className={styles.li}>
            <img
              className={styles.social_media_icon}
              src="images/whatsapp.png"
              alt=""
            />
          </li>
          <li className={styles.li}>
            <img
              className={styles.social_media_icon}
              src="images/instagram.png"
              alt=""
            />
          </li>
          <li className={styles.li}>
            <img
              className={styles.social_media_icon}
              src="images/facebook.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
