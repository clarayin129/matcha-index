'use client';

import React, { useState, useEffect } from 'react';
import styles from './PowderList.module.scss';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';
import { getFavorites } from '@utils/favorites';
import Image from 'next/image';

interface PowderListProps {
  powders: PowderProps[];
}

export default function PowderList({ powders }: PowderListProps) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [visiblePowders, setVisiblePowders] = useState<PowderProps[]>(powders);

  useEffect(() => {
    if (showFavorites) {
      const favoriteIds = getFavorites();
      const filtered = powders.filter((powder) =>
        favoriteIds.includes(powder.id)
      );
      setVisiblePowders(filtered);
    } else {
      setVisiblePowders(powders);
    }
  }, [showFavorites, powders]);

  if (!visiblePowders || visiblePowders.length === 0) {
    return <div>No powders found</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.favToggle}>
        <button
          onClick={() => setShowFavorites((prev) => !prev)}
          className={styles.toggleButton}
        >
          {showFavorites ? 'show all powders' : 'show favorites'}
          <Image
            src={
              showFavorites
                ? '/icons/Vectorheart.png'
                : '/icons/Vectorheart_filled.png'
            }
            alt={'favorite icon'}
            width={20}
            height={18}
          />
        </button>
      </div>

      <div className={styles.powderContainer}>
        {visiblePowders.map((powder) => (
          <Powder key={powder.id} powder={powder} />
        ))}
      </div>
    </div>
  );
}
