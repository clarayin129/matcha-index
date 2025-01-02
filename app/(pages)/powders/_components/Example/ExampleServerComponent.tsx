import { gql } from 'graphql-tag';

import sendApolloRequest from '@utils/sendApolloRequest';

const query = gql`
  query BrandPowdersQuery($name: String!, $brandId: ID!) {
    brand(name: $name, id: $brandId) {
      powders {
        name
      }
    }
  }
`;

// Example IDs
const variables = {
  name: 'Ippodo',
  brandId: 'c0dff35b-b575-4e9e-ae2a-03df5092aa3f',
};

export default async function ExampleServerComponent() {
  const users = await sendApolloRequest(query, variables);

  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
