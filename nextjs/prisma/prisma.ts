import { PrismaClient } from "@prisma/client";

//Exportar tipagem
export * from "@prisma/client";

export const prisma = new PrismaClient();
