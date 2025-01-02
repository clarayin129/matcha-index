import prisma from '../_prisma/client.js';

export default class Powders {
  static async findPowder({ name }) {
    return prisma.powder.findUnique({ where: { name } });
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
