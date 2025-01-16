import prisma from '../_prisma/client.ts';

export default class Brands {
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
