import prisma from '../_prisma/client.ts';

export default class Powders {
  static async find({ name }) {
    return await prisma.powder.findUnique({
      where: { name: name },
      include: { reviews: true },
    });
  }

  static async findAll() {
    return prisma.powder.findMany({
      orderBy: [
        {
          brandId: 'asc',
        },
        {
          pricePerGram: 'asc',
        },
      ],
      include: { reviews: true },
    });
  }

  static async findByFilter(filter) {
    const where = {};
    if (filter.strength !== undefined) {
      where.strength = filter.strength;
    }
    if (filter.usage !== undefined) {
      where.usage = {
        hasSome: filter.usage,
      };
    }

    if (filter.priceMin !== undefined && filter.priceMax !== undefined) {
      where.pricePerGram = {};
      if (filter.priceMin !== undefined) {
        where.pricePerGram.gte = filter.priceMin;
      }
      if (filter.priceMax !== undefined) {
        where.pricePerGram.lte = filter.priceMax;
      }
    }

    return await prisma.powder.findMany({
      where,
      orderBy: [
        {
          brandId: 'asc',
        },
        {
          pricePerGram: 'asc',
        },
      ],
    });
  }
}
