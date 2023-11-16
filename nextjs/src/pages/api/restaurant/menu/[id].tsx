import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const menuId = req.query.id;

  switch (req.method) {
    // case "CREATE": {
    //   await prisma.restaurant.create({});

    // }

    // will return a json with all menu data

    case "GET": {
      try {
        const menu = await prisma.menu.findUnique({
          where: { id: Number(menuId) },
          include: { categories: { include: { products: true } } },
        });

        if (menu) {
          res.status(200).json(menu);
        } else {
          const message: string = "Menu not found";
          res.status(400).json(message);
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      } finally {
        await prisma.$disconnect();
      }
    }

    case "DELETE": {
      //schema alredy set to cascade delete
      try {
        const deleteMenu = await prisma.menu.delete({
          where: { id: Number(menuId) },
        });

        if (deleteMenu) {
          res.status(200).json(deleteMenu);
        } else {
          const message: string = "Cardapio não encontrado";
          res.status(400).json(message);
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
