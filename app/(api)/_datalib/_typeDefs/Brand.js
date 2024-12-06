import gql from 'graphql-tag';

const typeDefs = gql`
  type Brand {
    id: ID!
    name: String!
    powders: [Powder!]!
  }

  input BrandInput {
    name: String!
  }

  type Query {
    brand(name: String!): Brand
    brand(id: String!): Brand
    brands: [Brand]
    powders: [Powder!]!
  }

  type Mutation {
    createBrand(id: ID!, input: BrandInput!): Brand
    addPowder(brandId: ID!, powderId: ID!): Boolean
  }
`;
export default typeDefs;
