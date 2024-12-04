import Powders from '../_services/Powders.js';

const resolvers = {
  Query: {
    powder: (_, { id }) => Powders.find({ id }),
    powders: () => Powders.findAll(),
  },
  Mutation: {
    createPowder: (_, { input }) => Powders.create({ input }),
  },
};
export default resolvers;
