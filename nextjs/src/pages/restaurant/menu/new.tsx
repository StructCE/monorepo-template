import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Menu.module.css";

import Navbar from "../../../components/NavbarRestaurant";
import Bolotas from "../../../components/Bolotas";
import NavbarRestaurant from "@/components/oldNavbarRestaurant";

import caixota from "/public/images/caixa_cardapio.png";
import carrinho from "/public/images/carrinho.png";
import pau from "/public/images/pau.png";
import caxeta from "/public/images/caixa_unidades.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Bolotas /> */}

        <a className={styles.img_caixa}>
          <Image src={caixota} height={140} alt=""></Image>
        </a>

        <div className={styles.pau}>
          <ul className={styles.paus}>
            <a>
              <Image src={pau} height={10} alt=""></Image>
            </a>
            <li className={styles.cat}>Categoria 1</li>
            <a>
              <Image src={pau} height={10} alt=""></Image>
            </a>
          </ul>
        </div>

        <section className={styles.tabelas}>
          
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>

          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>

        </section>

        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <div className={styles.pau}>
          <ul className={styles.paus}>
            <a>
              <Image src={pau} height={10} alt=""></Image>
            </a>
            <li className={styles.cat}>Categoria 2</li>
            <a>
              <Image src={pau} height={10} alt=""></Image>
            </a>
          </ul>
        </div>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Sushi</li>
              <li className={styles.li2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>Valor</li>
              <li className={styles.li2}>XX.XX R$</li>
              <a>
                <Image src={carrinho} alt=""></Image>
              </a>
            </ul>
          </div>
        </section>
        <a className={styles.img_caixa}>
          <Image src={caxeta} height={110} alt=""></Image>
        </a>
        <section className={styles.tabelas}>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Restaurante 1</li>
              <li className={styles.li2}>
                Endereço - Lorem ipsum dolor sit amet.
              </li>
              <li className={styles.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
              <li className={styles.li2}>
                Domingos e feriados - xx:xx às yy:yy
              </li>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Restaurante 2</li>
              <li className={styles.li2}>
                Endereço - Lorem ipsum dolor sit amet.
              </li>
              <li className={styles.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
              <li className={styles.li2}>
                Domingos e feriados - xx:xx às yy:yy
              </li>
            </ul>
          </div>
          <div className={styles.tabela}>
            <ul className={styles.ul}>
              <li className={styles.li}>Restaurante 3</li>
              <li className={styles.li2}>
                Endereço - Lorem ipsum dolor sit amet.
              </li>
              <li className={styles.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
              <li className={styles.li2}>
                Domingos e feriados - xx:xx às yy:yy
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
