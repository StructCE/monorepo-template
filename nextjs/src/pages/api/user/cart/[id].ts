import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cartId = Number(req.query.id);

  switch (req.method) {
    case "POST":
      {
        try {
          const newCart = await prisma.cart.create({
            data: {
              id: req.body.id,
              userId: req.body.userID,
            },
          });
          if (newCart) {
            res.status(200).json(newCart);
          } else {
            const message: string = "Couldn't create cart";
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

    // case "PUT":
    //   {
    //     try {
    //       const newMenu = await prisma.menu.update({
    //         where: { id: cartId },
    //         data: req.body,
    //       });

    //       if (newMenu) {
    //         res.status(200).json(newMenu);
    //       } else {
    //         const message: string = "Couldn't update cart";
    //         res.status(400).json(message);
    //       }
    //     } catch (error) {
    //       const message: string = "Error trying to update the cart";
    //       res.status(500).json(message);
    //     } finally {
    //       await prisma.$disconnect();
    //     }
    //   }
    //   break;

    case "GET":
      {
        try {
          const cart = await prisma.cart.findUnique({
            where: { id: cartId },
            include: {
              user: true,
              cartProduct: { include: { product: true, restaurant: true } },
            },
          });

          if (cart) {
            res.status(200).json(cart);
          } else {
            const message: string = "Cart not found";
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

    case "DELETE":
      {
        try {
          const deleteCartProduct = await prisma.cartProduct.deleteMany({
            where: { cartId: cartId },
          });

          if (deleteCartProduct) {
            res.status(200).json(deleteCartProduct);
          } else {
            const message: string = "Cart not found";
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
