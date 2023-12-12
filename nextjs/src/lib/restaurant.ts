import { useSession } from "next-auth/react";
import { prisma } from "../../prisma/prisma";
import { useRouter } from "next/router";

export async function getRestaurant(restaurantId: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: Number(restaurantId) },
  });
  return restaurant;
}

