import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cartId = Number(req.query.id);

  switch (req.method) {
    // case "CREATE": {
    //   try {
    //     const newMenu = await prisma.menu.create({ data: req.body });
    //     if (newMenu) {
    //       res.status(200).json(newMenu);
    //     } else {
    //       res.status(400)
    //     }
    //   } catch (error) {
    //     res.status(500)
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // }

    // case "PUT": {
    //   try {
    //     const cartProduct = await prisma.cartProduct.update({
    //       where: { productId: 0 },
    //       data: {quantity: req.body.quantity},
    //     });

    //     if (cartProduct) {
    //       res.status(200);
    //     } else {
    //       res.status(400).json("Couldn't update cart product data");
    //     }
    //   } catch (error) {
    //     res.status(500);
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // }

    case "GET": {
      try {
        const cartProducts = await prisma.cartProduct.findMany({
          where: { cartId: cartId },
          include: { product: true },
        });

        if (cartProducts) {
          res.status(200);
        } else {
          res.status(400);
        }
      } catch (error) {
        res.status(500);
      } finally {
        await prisma.$disconnect();
      }
    }

    case "DELETE": {
      try {
        const cartProducts = await prisma.cartProduct.deleteMany({
          where: { cartId: cartId },
        });

        if (cartProducts) {
          res.status(200);
        } else {
          res.status(400);
        }
      } catch (error) {
        res.status(500);
      } finally {
        await prisma.$disconnect();
      }
    }

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
}
