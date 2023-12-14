import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ownerEmail = String(req.query.ownerEmail);

  switch (req.method) {
    case "POST":
      {
        try {
          const user = await prisma.user.create({
            data: {
              email: ownerEmail,
              name: req.body.owner.name,
              password: req.body.owner.password,
              isOwner: true,
            },
          });

          if (user) {
            const restaurant = await prisma.restaurant.create({
              data: {
                ownerEmail: ownerEmail,
                name: req.body.restaurant.name,
                location: req.body.restaurant.location,
                phone: req.body.restaurant.phone,
                contacts: req.body.restaurant.contacts,
                description: req.body.restaurant.description,
                schedule: req.body.restaurant.schedule,
              },
            });
            if (restaurant) {
              res.status(200).json(user);
            } else {
              const message: string = "Couldn't create restaurant";
              res.status(400).json(message);
            }
          } else {
            const message: string = "Couldn't create owner";
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

    case "PUT":
      {
        try {
          const owner = await prisma.user.update({
            where: { email: ownerEmail },
            data: {
              email: req.body.email,
              name: req.body.name,
              password: req.body.password,
            },
          });

          if (owner) {
            res.status(200).json(owner);
          } else {
            const message: string = "Couldn't update owner data";
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

    case "GET":
      {
        try {
          const owner = await prisma.user.findUnique({
            where: { email: ownerEmail, isOwner: true },
          });

          if (owner) {
            res.status(200).json(owner);
          } else {
            const message: string = "Owner not found";
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
        //schema alredy set to cascade delete
        try {
          const owner = await prisma.user.delete({
            where: { email: ownerEmail },
          });

          if (owner) {
            res.status(200).json(owner);
          } else {
            const message: string = "Owner not found";
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
