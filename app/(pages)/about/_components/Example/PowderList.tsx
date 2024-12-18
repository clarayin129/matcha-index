import React from 'react';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';

const PowderList: React.FC<{ powders: PowderProps[] }> = ({ powders }) => {
  return (
    <div>
      {powders.map((powder) => (
        <Powder key={powder.id} powder={powder} />
      ))}
    </div>
  );
};

export default PowderList;
