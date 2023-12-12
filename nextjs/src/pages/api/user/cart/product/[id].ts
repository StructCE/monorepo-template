import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = Number(req.query.id);

  switch (req.method) {
    case "POST":
      {
        try {
          const newMenu = await prisma.cartProduct.create({
            data: {
              productId: productId,
              cartId: req.body.cartId,
            },
          });
          if (newMenu) {
            res.status(200).json(newMenu);
          } else {
            const message: string = "Couldn't create cart product";
            res.status(400).json(message);
          }
        } catch (error) {
          const message: string = "Error trying to create the menu";
          res.status(500).json(message);
        } finally {
          await prisma.$disconnect();
        }
      }
      break;

    case "PUT":
      {
        try {
          const cartProduct = await prisma.cartProduct.update({
            where: { productId: productId },
            data: { quantity: req.body.quantity },
          });

          if (cartProduct) {
            res.status(200).json(cartProduct);
          } else {
            const message: string = "Couldn't update cart product";
            res.status(400).json(message);
          }
        } catch (error) {
          const message: string = "Error trying to acess the database";
          res.status(500).json(message);
        } finally {
          await prisma.$disconnect();
        }
      }
      break;

    // case "GET":
    //   {
    //     try {
    //       const menu = await prisma.cart.findUnique({
    //         where: { id: cartId },
    //         include: { cartProduct: { include: { product: true } } },
    //       });

    //       if (menu) {
    //         res.status(200).json(menu);
    //       } else {
    //         const message: string = "Cart not found";
    //         res.status(400).json(message);
    //       }
    //     } catch (error) {
    //       const message: string = "Error trying to acess the database";
    //       res.status(500).json(message);
    //     } finally {
    //       await prisma.$disconnect();
    //     }
    //   }
    //   break;

    case "DELETE":
      {
        //schema alredy set to cascade delete
        try {
          const cartProduct = await prisma.cartProduct.delete({
            where: { productId: productId },
          });

          if (cartProduct) {
            res.status(200).json(cartProduct);
          } else {
            const message: string = "Cart product not found";
            res.status(400).json(message);
          }
        } catch (error) {
          const message: string = "Error trying to acess the database";
          res.status(500).json(message);
        } finally {
          await prisma.$disconnect();
        }
      }
      break;

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
}
