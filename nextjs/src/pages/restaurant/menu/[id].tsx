// import { Category } from "@/types/types";
// import { Category } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, prisma } from "../../../../prisma/prisma";

export const getServerSideProps: GetServerSideProps<{
  restaurantMenu: Menu;
}> = async (context) => {
  const { menuId } = context.query;
  const res = await fetch(`http://localhost:3000/api/menu/${menuId}`, {
    method: "GET",
  });
  const restaurantMenu = await res.json();
  console.log(restaurantMenu);
  return { props: { restaurantMenu } };
};

export default function MenuPage({
  restaurantMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <div className="menu">
        <h1>{restaurantMenu.name}</h1>
      </div>
      <div>
        <h1>Restaurante: {router.query.id}</h1>
      </div>
    </>
  );
}
