import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Restaurant } from "../../../../prisma/prisma";
import { getRestaurant } from "@/lib/restaurant";

export const getServerSideProps: GetServerSideProps<{
  restaurant: Restaurant;
}> = async (context) => {
  const restaurantId = context.query.id;
  const restaurant = await getRestaurant(restaurantId);
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
      </div>
      <div>
        <h1>Restaurante: {router.query.id}</h1>
      </div>
    </>
  );
}
