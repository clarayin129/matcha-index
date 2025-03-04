import gql from 'graphql-tag';

const typeDefs = gql`
  type Brand {
    id: ID!
    name: String!
    powders: [Powder!]!
  }

  type Query {
    brand(name: String, id: ID): Brand
    brands: [Brand]
    powders: [Powder!]!
  }
`;
export default typeDefs;
