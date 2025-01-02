'use client';

import React, { useState } from 'react';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';
import styles from './PowderSearch.module.scss';

interface MatchaSearchProps {
  initialPowders: PowderProps[];
}

const MatchaSearch: React.FC<MatchaSearchProps> = ({ initialPowders }) => {
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
    <div>
      <input
        type="text"
        placeholder="Search powders..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.search}
      />
      <div className={styles.container}>
        {filteredPowders.map((powder) => (
          <Powder key={powder.id} powder={powder} />
        ))}
      </div>
    </div>
  );
};

export default MatchaSearch;
