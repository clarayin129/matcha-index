import prisma from '../_prisma/client.js';

export default class Reviews {
  static createReview = async (_, { input }) => {
    const existingReview = await prisma.review.findFirst({
      where: {
        user: input.user,
        powderId: input.powderId,
      },
    });

    if (existingReview) {
      throw new Error('Review already exists for this user and powder.');
    }

    const newReview = await prisma.review.create({
      data: {
        user: input.user,
        text: input.text,
        rating: input.rating,
        powderId: input.powderId,
      },
    });

    return newReview;
  };

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
