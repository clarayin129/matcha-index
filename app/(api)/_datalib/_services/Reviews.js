import prisma from '../_prisma/client.js';

export default class Reviews {
  static async create({ user, text, rating }) {
    const review = await prisma.review.create({
      data: {
        user,
        text,
        rating,
      },
    });
    return review;
  }
}
