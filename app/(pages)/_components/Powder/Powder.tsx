import React from 'react';

export type PowderProps = {
  id: string;
  name: string;
  strength: string;
  pricePerGram: number;
  usage: string[];
};

const Powder: React.FC<{ powder: PowderProps }> = ({ powder }) => {
  return (
    <div className="powder">
      <h3>{powder.name}</h3>
      <p>
        <strong>Strength:</strong> {powder.strength}
      </p>
      <p>
        <strong>Price Per Gram:</strong> ${powder.pricePerGram.toFixed(2)}
      </p>
      <p>
        <strong>Usage:</strong> {powder.usage.join('')}
      </p>
    </div>
  );
};

export default Powder;
