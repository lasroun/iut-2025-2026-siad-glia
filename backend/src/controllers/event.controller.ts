import  prisma from  "../client";
import { Request, Response } from "express";

//const prisma = new PrismaClient();

export const registerToEvent = async (req: Request, res: Response) => {
  const { studentId, eventId } = req.body;

  try {
    const registration = await prisma.event.update({
      where: { id: eventId },
      data: {
        students: {
          connect: { id: studentId }
        }
      }
    });

    res.json(registration);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};