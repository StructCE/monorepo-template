import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ownerEmail = String(req.query.ownerEmail);

  switch (req.method) {
    case "GET": {
      try {
        const restaurant = await prisma.restaurant.findUnique({
          where: { ownerEmail: ownerEmail },
          include: { menu: true },
        });

        if (!restaurant) {
          res.status(400).json("Não foi possível encontrar restaurante");
        } else {
          if (!restaurant.menu) {
            res.status(400).json("Não foi possível encontrar cardápio");
          } else {
            res.status(200).json("Cardapio encontrado com sucesso.");
          }
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      } finally {
        await prisma.$disconnect();
      }
    }

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
}
