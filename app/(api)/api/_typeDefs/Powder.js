import gql from 'graphql-tag';

const typeDefs = gql`
  type Powder {
    id: ID!
    name: String!
    brand: Brand
    strength: String
  }

  input PowderInput {
    name: String!
  }

  type Query {
    brand(id: ID!): Brand
    strength: String
  }

  type Mutation {
    createPowder(input: PowderInput!): Powder
  }
`;
export default typeDefs;
