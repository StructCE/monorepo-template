import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Restaurant } from "../../../../prisma/prisma";
import { getRestaurant } from "@/lib/restaurant";

// export const getServerSideProps: GetServerSideProps<{
//   restaurant: Restaurant;
// }> = async (context) => {
//   const restaurantId = context.query.id;

//   const restaurant = await getRestaurant(restaurantId);
//   return { props: { restaurant } };
// };

export const getServerSideProps: GetServerSideProps<{
  restaurant: Restaurant;
}> = async (context) => {
  const restaurantId = context.query.id;
  const res = await fetch(
    `http://localhost:3000/api/restaurant/home/${restaurantId}`,
    { method: "GET" }
  );
  const restaurant = await res.json();
  return { props: { restaurant } };
};

export default function RestaurantHomePage({
  restaurant,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.contacts}</h1>
        <h1>{restaurant.description}</h1>
        <h1>{restaurant.id}</h1>
        <h1>{restaurant.location}</h1>
        <h1>{restaurant.phone}</h1>
        <h1>{restaurant.schedule}</h1>
      </div>
      <div>
        <h1>Restaurante: {router.query.id}</h1>
      </div>
    </>
  );
}
