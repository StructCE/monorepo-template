import { prisma } from "../../prisma/prisma";

export async function getRestaurant(restaurantId: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: Number(restaurantId) },
  });
  return restaurant;
}
