import { PrismaClient } from "@prisma/client";

declare global {
  /* eslint-disable */
  var prisma: PrismaClient | undefined;
  /* eslint-enable */
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
