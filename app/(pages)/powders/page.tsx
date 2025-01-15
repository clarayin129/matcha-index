import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import styles from './page.module.scss';
import { Suspense } from 'react';
import SearchBar from './_components/Example/SearchBar';
import PowderList from './_components/Example/PowderList';
import { PowderProps } from '../_components/Powder/Powder';
import { revalidatePath } from 'next/cache';

const powderQuery = gql`
  query getAllPowders {
    powders {
      id
      name
      strength
      pricePerGram
      usage
      description
      brand {
        name
      }
      reviews {
        id
        rating
        text
        user
      }
    }
  }
`;

const fetchPowders = async (): Promise<PowderProps[]> => {
  const { data } = await sendApolloRequest(powderQuery, {}, { path: '/' });
  return data.powders || [];
};

export default async function PowdersPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  revalidatePath('/');
  const powders = await fetchPowders();
  const searchTerm = searchParams.search?.toLowerCase() || '';
  const filteredPowders =
    searchTerm === ''
      ? powders
      : powders.filter((powder: PowderProps) => {
          const matchesName = powder.name.toLowerCase().includes(searchTerm);
          const matchesUsage = powder.usage.some((usage: string) =>
            usage.toLowerCase().includes(searchTerm)
          );
          const matchesStrength = powder.strength
            .toLowerCase()
            .includes(searchTerm);
          const matchesBrand = powder.brand.name
            .toLowerCase()
            .includes(searchTerm);

          return matchesName || matchesUsage || matchesStrength || matchesBrand;
        });

  return (
    <main className={styles.body}>
      <SearchBar />
      <Suspense fallback={<div>Loading powders...</div>}>
        <PowderList powders={powders} />
      </Suspense>
    </main>
  );
}
