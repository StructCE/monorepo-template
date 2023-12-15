import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ShowProduct from "@/components/ShowProduct";
import NavbarRestaurant from "@/components/NavbarRestaurant";

export const getServerSideProps: GetServerSideProps<{
  restaurantMenu: any;
}> = async (context) => {
  const menuId = context.query.id;
  const res = await fetch(
    `http://localhost:3000/api/restaurant/menu/${menuId}`,
    { method: "GET" }
  );

  let restaurantMenu = {};
  if (res.ok) {
    restaurantMenu = await res.json();
  }

  return { props: { restaurantMenu } };
};

export default function MenuPage({
  restaurantMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (JSON.stringify(restaurantMenu) === "{}") {
    return (
      <div>
        <h1>Cardápio não encontrado</h1>
      </div>
    );
  } else
    return (
      <div>
        <NavbarRestaurant restaurantData={restaurantMenu.restaurant} />
        <div className="menu">
          <h1>{restaurantMenu.name}</h1>
          <h1>Restaurante: {router.query.id}</h1>
        </div>
        <div>
          {restaurantMenu.categories.map((categoria: any) => {
            return (
              <div>
                <h2>{categoria.name}</h2>
                {categoria.products.map((produto: any) => {
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
