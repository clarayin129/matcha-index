import prisma from '../_prisma/client.js';

export default class Brands {
  // CREATE
  static async create({ id, input }) {
    const { name } = input;
    const brand = await prisma.brand.create({
      data: {
        id,
        name,
      },
    });
    return brand;
  }

  // READ
  static async findByName({ name }) {
    return prisma.brand.findUnique({ where: { name } });
  }

  static async findById({ id }) {
    return prisma.brand.findUnique({
      where: { id },
      select: {
        name: true,
      },
    });
  }

  static async findAll() {
    return prisma.brand.findMany();
  }

  // OTHER
  static async addPowder({ brandId, powderId }) {
    try {
      await prisma.brand.create({
        data: {
          brandId,
          powderId,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  static async getPowders({ name }) {
    const brand = await prisma.brand.findUnique({
      where: {
        name,
      },
    });

    const powders = await prisma.powder.findMany({
      where: {
        brandId: brand.id,
      },
    });

    return powders;
  }
}
