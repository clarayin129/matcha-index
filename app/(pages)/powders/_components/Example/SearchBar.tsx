'use client';

import React from 'react';
import styles from './SearchBar.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className={styles.body}>
      <h2 className={'headText'}>powder search</h2>
      <input
        type="text"
        placeholder="Search powders..."
        onChange={handleSearch}
        defaultValue={searchParams.get('search') ?? ''}
        className={styles.search}
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
    </div>
  );
}
