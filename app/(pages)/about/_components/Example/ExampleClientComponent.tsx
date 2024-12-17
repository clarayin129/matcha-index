'use client';

import { gql } from 'graphql-tag';
import { useState } from 'react';

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
const variable = {
  name: 'Ippodo',
  brandId: 'c0dff35b-b575-4e9e-ae2a-03df5092aa3f',
};

export default function ExampleClientComponent() {
  const [powders, setPowders] = useState(null);

  const handleRequest = async () => {
    const res = await sendApolloRequest(query, variable);
    setPowders(res);
  };

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={handleRequest}> Yay button </button>
      <pre>{JSON.stringify(powders, null, 2)}</pre>
    </div>
  );
}
