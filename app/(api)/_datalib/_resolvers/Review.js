import Reviews from '../_services/Reviews.js';

const resolvers = {
  Mutation: {
    addReview: (_, { input }) => Reviews.createReview({ input }),
  },
};
export default resolvers;
