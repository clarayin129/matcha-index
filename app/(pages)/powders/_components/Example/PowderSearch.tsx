'use client';

import React from 'react';
import { PowderProps } from '../../../_components/Powder/Powder';
import styles from './PowderSearch.module.scss';
import SearchInput from './SearchBar';
import PowderList from './PowderList';
import { useSearchParams } from 'next/navigation';

interface PowderSearchProps {
  initialPowders: PowderProps[];
}

export default function PowderSearch({ initialPowders }: PowderSearchProps) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const filteredPowders =
    searchTerm === ''
      ? initialPowders
      : initialPowders.filter((powder) => {
          const term = searchTerm.toLowerCase();
          const matchesName = powder.name.toLowerCase().includes(term);
          const matchesUsage = powder.usage.some((u) =>
            u.toLowerCase().includes(term)
          );
          const matchesStrength = powder.strength.toLowerCase().includes(term);
          const matchesBrand = powder.brand.name.toLowerCase().includes(term);

          return matchesName || matchesUsage || matchesStrength || matchesBrand;
        });

  return (
    <div className={styles.body}>
      <h2 className={'headText'}>powder search</h2>
      <SearchInput
        onSearch={(term) => {
          const params = new URLSearchParams(window.location.search);
          if (term) {
            params.set('search', term);
          } else {
            params.delete('search');
          }
          window.history.replaceState(null, '', `?${params.toString()}`);
        }}
      />

      <div>in addition to name, you can search by:</div>

      <div className={styles.infoContainer}>
        <div className={styles.infoLine}>
          <div className={'brandTag'}>Brand</div>
          <p>Marukyu Koyamaen, Ippodo</p>
        </div>
        <div className={styles.infoLine}>
          <div className={'infoTag'}>Strength</div>
          <p>Light, Medium, Rich</p>
        </div>
        <div className={styles.infoLine}>
          <div className={'infoTag'}>Usage</div>
          <p>Latte, Usucha, Koicha</p>
        </div>
      </div>

      <PowderList powders={filteredPowders} />
    </div>
  );
}
