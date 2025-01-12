'use client';

import React, { useState } from 'react';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';
import styles from './PowderSearch.module.scss';

interface PowderSearchProps {
  initialPowders: PowderProps[];
}

const PowderSearch: React.FC<PowderSearchProps> = ({ initialPowders }) => {
  const [filteredPowders, setFilteredPowders] =
    useState<PowderProps[]>(initialPowders);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredPowders(initialPowders);
    } else {
      const filtered = initialPowders.filter((powder) => {
        const matchesName = powder.name.toLowerCase().includes(term);
        const matchesUsage = powder.usage.some((u) =>
          u.toLowerCase().includes(term)
        );
        const matchesStrength = powder.strength.toLowerCase().includes(term);
        const matchesBrand = powder.brand.name.toLowerCase().includes(term);

        return matchesName || matchesUsage || matchesStrength || matchesBrand;
      });

      setFilteredPowders(filtered);
    }
  };

  return (
    <div className={styles.body}>
      <h2 className={'headText'}>powder search</h2>
      <input
        type="text"
        placeholder="Search powders..."
        value={searchTerm}
        onChange={handleSearch}
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

      <div className={styles.powderContainer}>
        {filteredPowders.map((powder) => (
          <Powder key={powder.id} powder={powder} />
        ))}
      </div>
    </div>
  );
};

export default PowderSearch;
