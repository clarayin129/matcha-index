import prisma from '../_prisma/client.js';

export default class Powders {
  // CREATE
  static async create({ input }) {
    const { name } = input;
    const powder = await prisma.powder.create({
      data: {
        name,
      },
    });
    return powder;
  }

  // READ
  static async find({ name }) {
    return prisma.powder.findUnique({ where: { name } });
  }

  static async findAll() {
    return prisma.powder.findMany();
  }
}
