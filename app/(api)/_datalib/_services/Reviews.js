import prisma from '../_prisma/client.ts';

export default class Reviews {
  static async createReview({ powderId, input }) {
    const { user, text, rating } = input;
    const review = await prisma.review.create({
      data: {
        powderId,
        user,
        text,
        rating,
      },
    });
    return review;
  }

  static async findReviews({ powderId }) {
    return await prisma.review.findMany({
      where: {
        powderId: powderId,
      },
      include: {
        powder: true,
      },
    });
  }
}
