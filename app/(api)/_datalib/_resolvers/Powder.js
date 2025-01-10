import Powders from '../_services/Powders.js';
import Brands from '../_services/Brands.js';
import Reviews from '../_services/Reviews.js';

const resolvers = {
  Powder: {
    brand: async ({ brandId }) => {
      const brand = await Brands.findById({ id: brandId });
      if (brand) {
        return { name: brand.name };
      }
      return null;
    },
    reviews: ({ id }) => {
      return Reviews.findReviews({ powderId: id });
    },
  },
  Query: {
    powder: (_, { name }) => Powders.find({ name }),
    powders: async (_, args) => {
      if (args.filter) {
        return await Powders.findByFilter(args.filter);
      }
      return Powders.findAll();
    },
  },
  Mutation: {
    addReview: async (_, { powderId, input }) =>
      Reviews.createReview({ powderId, input }),
  },
};

export default resolvers;
