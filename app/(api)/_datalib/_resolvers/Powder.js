import Powders from '../_services/Powders.js';
import Brands from '../_services/Brands.js';

const resolvers = {
  Powder: {
    brand: async ({ brandId }) => {
      const brand = await Brands.findById({ id: brandId });
      if (brand) {
        return { name: brand.name };
      }
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
};
export default resolvers;
