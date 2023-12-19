import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ShowProduct from "@/components/ShowProduct";
import NavbarRestaurant from "@/components/NavbarRestaurant";
import { Category, Menu, Product, defaultMenu } from "@/types/types";

import styles from "@/styles/Menu.module.css";

import Image from "next/image";
import Head from "next/head";

import caixote from "/public/images/caixa_restaurante.png"
import caixota from "/public/images/caixa_cardapio.png";
import pau from "/public/images/pau.png";

export const getServerSideProps: GetServerSideProps<{
  menu: Menu;
}> = async (context) => {
  const menuId = context.query.id;
  const res = await fetch(
    `http://localhost:3000/api/restaurant/menu/${menuId}`,
    { method: "GET" }
  );

  let menu = defaultMenu;

  if (res.ok) {
    menu = await res.json();
  }

  return { props: { menu } };
};

export default function MenuPage({
  menu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (menu.id === 0 || !menu.restaurant) {
    return (
      <div>
        <h1>Cardápio não encontrado</h1>
      </div>
    );
  } else {
    const restaurantId = Number(menu.restaurant.id);
    return (
      <div className={styles.page}>
        <div>
          <Head>
            <title>Cardápio</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <NavbarRestaurant restaurant={menu.restaurant} />

          <span className={styles.img_caixa}>
            <Image src={caixote} height={140} alt=""></Image>
          </span>
      

          <span className={styles.img_caixa}>
            <Image src={caixota} height={140} alt=""></Image>
          </span>

          <div>
            {menu.categories &&
              menu.categories.map((categoria: Category) => {
                return (
                  <div>
                    <div className={styles.pau}>
                      <ul className={styles.paus}>
                        <span>
                          <Image src={pau} height={10} alt=""></Image>
                        </span>
                        <li className={styles.cat}>{categoria.name}</li>
                        <span>
                          <Image src={pau} height={10} alt=""></Image>
                        </span>
                      </ul>
                    </div>

                    {categoria.products &&
                      Array.from(
                        { length: Math.ceil(categoria.products.length / 2) },
                        (_, i) => i * 2
                      ).map((itemIndex) => {
                        const produto1 = (categoria.products || [])[itemIndex];
                        const produto2 = (categoria.products || [])[
                          itemIndex + 1
                        ];
                        return (
                          <section className={styles.tabelas}>
                            <ShowProduct
                              product={produto1}
                              restaurantId={Number(restaurantId)}
                            />
                            {produto2 ? (
                              <ShowProduct
                                product={produto2}
                                restaurantId={Number(restaurantId)}
                              />
                            ) : (
                              <div className={styles.tabela}></div>
                            )}
                          </section>
                        );
                      })}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
