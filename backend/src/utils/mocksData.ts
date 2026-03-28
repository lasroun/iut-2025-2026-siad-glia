import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const generateMockData = async () => {
  // Associations
  const assocNames = ["BDE", "Club Informatique", "Club Sport"];
  for (const name of assocNames) {
    await prisma.association.create({ data: { name } });
  }

  // Students
  for (let i = 0; i < 30; i++) {
    await prisma.student.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email()
      }
    });
  }

  // Events
  for (let i = 0; i < 10; i++) {
    await prisma.event.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        date: faker.date.soon(),
        associationId: faker.number.int({ min: 1, max: 3 })
      }
    });
  }

  console.log("🔥 Fake data successfully generated !");
};