import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ShowProduct from "@/components/ShowProduct";
import NavbarRestaurant from "@/components/NavbarRestaurant";
import { Category, Menu, Product, defaultMenu } from "@/types/types";

export const getServerSideProps: GetServerSideProps<{
  restaurantMenu: Menu;
}> = async (context) => {
  const menuId = context.query.id;
  const res = await fetch(
    `http://localhost:3000/api/restaurant/menu/${menuId}`,
    { method: "GET" }
  );

  let restaurantMenu = defaultMenu;

  if (res.ok) {
    restaurantMenu = await res.json();
  }

  return { props: { restaurantMenu } };
};

export default function MenuPage({
  restaurantMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (restaurantMenu.id === 0) {
    return (
      <div>
        <h1>Cardápio não encontrado</h1>
      </div>
    );
  } else
    return (
      <div>
        <NavbarRestaurant restaurant={restaurantMenu.restaurant} />
        <div className="menu">
          <h1>{restaurantMenu.name}</h1>
          <h1>Restaurante: {router.query.id}</h1>
        </div>
        <div>
          {restaurantMenu.categories &&
            restaurantMenu.categories.map((categoria: Category) => {
              return (
                <div>
                  <h2>{categoria.name}</h2>
                  {categoria.products &&
                    categoria.products.map((produto: Product) => {
                      return (
                        <div>
                          <ShowProduct product={produto} />;
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    );
}
