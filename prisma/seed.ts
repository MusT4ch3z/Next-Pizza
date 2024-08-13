import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "./prisma-client";
async function up() {
   await prisma.user.createMany({
      data: [
         {
            fullName: "First User",
            email: "1user@next.ru",
            password: "1user",
         },
         {
            fullName: "Guzlan",
            email: "Guzlan@4zirki.ua",
            password: "guzlan",
         },
      ],
   });
}
async function down() {}

async function main() {
   try {
      await down();
      await up();
   } catch (error) {
      console.error(error);
   }
}
