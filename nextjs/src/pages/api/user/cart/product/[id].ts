import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = Number(req.query.id);

  switch (req.method) {
    // case "CREATE": {
    //   try {
    //     const cartProduct = await prisma.cartProduct.create({
    //       data:{quantity: req.body.quantity,
    //       cartId: }
    //     });

    //     if (cartProduct) {
    //       res.status(200)
    //     } else {
    //       res.status(400)
    //     }
    //   } catch (error) {
    //     res.status(500)
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // }

    case "GET": {
      try {
        const cartProduct = await prisma.cartProduct.findUnique({
          where: { productId: productId },
          include: { product: true },
        });

        if (cartProduct) {
          res.status(200)
        } else {
          res.status(400)
        }
      } catch (error) {
        res.status(500)
      } finally {
        await prisma.$disconnect();
      }
    }

    case "PUT": {
      try {
        const cartProduct = await prisma.cartProduct.update({
          where: { productId: productId },
          data: { quantity: req.body.quantity },
        });

        if (cartProduct) {
          res.status(200);
        } else {
          res.status(400)
        }
      } catch (error) {
        res.status(500);
      } finally {
        await prisma.$disconnect();
      }
    }

    case "DELETE": {
      try {
        const cartProduct = await prisma.cartProduct.delete({
          where: { productId: productId },
        });

        if (cartProduct) {
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
