import gql from 'graphql-tag';

const typeDefs = gql`
  type Review {
    id: ID!
    powder: Powder
    user: String!
    text: String!
    rating: Int!
  }

  input ReviewInput {
    user: String!
    text: String!
    rating: Int!
  }

  type Mutation {
    createReview(input: ReviewInput): Review
  }
`;
export default typeDefs;
