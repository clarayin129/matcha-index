'use client';

import { gql } from 'graphql-tag';
import { useState } from 'react';

import sendApolloRequest from '@utils/sendApolloRequest';

const query = gql`
  query BrandQuery($name: String!) {
    brand(name: $name) {
      id
    }
  }
`;

// Example IDs
const variable = {
  name: 'Ippodo',
};

export default function ExampleClientComponent() {
  const [users, setUsers] = useState(null);

  const handleRequest = async () => {
    const res = await sendApolloRequest(query, variable);
    console.log('ID being queried:', variable.name);
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
