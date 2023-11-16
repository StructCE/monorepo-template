import styles from "@/styles/Home.module.css";
import Head from "next/head";
import SubscriptionCard from "@/components/SubscriptionCard";
import Separator from "@/components/Separator";
import Slider from "@/components/Slider";
import Carrossel from "@/components/Slider";

// import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>FazGostoso</title>
      </Head>
      <main className={styles.home}>
        <Separator variation={1} />
        <section>
          <div className={styles.sec1}>
            <div>
              <h2 className={styles.h2}>
                Crie seu cardápio digital em apenas alguns cliques!
              </h2>
              <p className={styles.p}>
                Com nossos cardápios digitais você pode compartilhar seus pratos
                e produtos com clientes em qualquer plataforma e rede social, de
                forma GRATUITA!
              </p>
            </div>
            <div>
              <SubscriptionCard />
            </div>
          </div>
        </section>
        <Separator variation={1} />
        <section>
          <div className={styles.sec2}>
            <h2 className={styles.h2}>Benefícios imperdíveis!</h2>
            <ul className={styles.ul}>
              <li>
                <b>Modelo fácil e prático:</b> Nosso site fornece uma forma
                simples de criar cardápios rapidamente!
              </li>
              <li>
                <b>Adaptabilidade:</b> Com um cardápio digital seu restaurante
                pode atualizar seus pratos em qualquer hora em qualquer lugar!
              </li>
              <li>
                <b>Redução de custos:</b> Você não precisará ter que gastar com
                impressão e atualização de cardápios antigos!
              </li>
              <li>
                <b>Integração:</b> Seu cardápio pode ser acessado em qualquer
                dispositivo e ser integrado com a página do seu restaurante!
              </li>
              <li>
                <b>Compartilhamento:</b> Seus clientes terão acesso ao seu
                cardápio em qualquer rede social, delivery ou QR code!
              </li>
            </ul>
          </div>
        </section>{" "}
        <Separator variation={2} />
        <section>
          <div className={styles.sec3}>
            <div>
              <h2 className={styles.h2}>Nunca foi tão simples!</h2>
              <p className={styles.p}>Seu cardápio em apenas 3 passos!</p>
            </div>
            <div>
              <ol className={styles.ol}>
                <li>Crie sua conta</li>
                <li>Registre seu restaurante</li>
                <li>Personalize seu cardápio</li>
              </ol>
            </div>
          </div>
        </section>{" "}
        <Separator variation={3} />
        <section>
          <div className={styles.sec4}>
            <div>
              <h1 className={styles.h1}>
                Registre-se agora e crie seu cardápio personalizado!!
              </h1>
            </div>
            <div>
              <SubscriptionCard />
            </div>
          </div>
        </section>
        <Separator variation={4} />
      </main>
    </>
  );
}
