import prisma from '../_prisma/client.js';

export default class Powders {
  // READ
  static async find({ name }) {
    return prisma.powder.findUnique({ where: { name } });
  }

  static async findAll() {
    return prisma.powder.findMany();
  }
}
