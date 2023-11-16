// import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "../../../../../prisma/prisma";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const restaurantId = "1";

//   switch (req.method) {
//     // case "CREATE": {
//     //   await prisma.restaurant.create({});

//     // }

//     case "GET": {
//       try {
//         const restaurant = await prisma.restaurant.findUnique({
//           where: { id: Number(restaurantId) },
//         });

//         if (restaurant) {
//           return res.status(200).json(restaurant);
//         } else {
//           const message: string = "Restaurant not found";
//           return res.status(400).json(message);
//         }
//       } catch (error) {
//         const message: string = "Error trying to acess the database";
//         return res.status(500).json(message);
//       } finally {
//         await prisma.$disconnect();
//       }
//     }

//     case "DELETE": {
//       try {
//         const deleteRestaurant = await prisma.restaurant.delete({
//           where: { id: Number(restaurantId) },
//         });

//         if (deleteRestaurant) {
//           return res.status(200).json(deleteRestaurant);
//         } else {
//           const message: string = "Restaurant not found";
//           return res.status(400).json(message);
//         }
//       } catch (error) {
//         const message: string = "Error trying to acess the database";
//         return res.status(500).json(message);
//       } finally {
//         await prisma.$disconnect();
//       }
//     }

//     default:
//       throw new Error(`The HTTP ${req.method} method is not supported`);
//   }
// }
