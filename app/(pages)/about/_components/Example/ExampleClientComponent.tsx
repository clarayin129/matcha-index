'use client';

import { gql } from 'graphql-tag';
import { useState } from 'react';

import sendApolloRequest from '@utils/sendApolloRequest';

const query = gql`
  query BrandQuery($brandId: ID!) {
    brand(id: $brandId) {
      name
    }
  }
`;

// Example IDs
const variable = {
  brandId: '1',
};

export default function ExampleClientComponent() {
  const [users, setUsers] = useState(null);

  const handleRequest = async () => {
    const res = await sendApolloRequest(query, variable);
    setUsers(res);
  };

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={handleRequest}>Button</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
