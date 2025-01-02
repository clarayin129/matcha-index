import Reviews from '../_services/Reviews.js';

const resolvers = {
  Mutation: {
    addReview: (_, { user, text, rating }) =>
      Reviews.create({ user, text, rating }),
  },
};
export default resolvers;
