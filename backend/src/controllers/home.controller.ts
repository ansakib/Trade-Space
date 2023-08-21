import { Request, Response } from "express";

// import prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*

1. get all categories: api/home/categories

*/

let get_categories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        name: true,
      },
    });
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: "categories not found" });
  }
};

export { get_categories };