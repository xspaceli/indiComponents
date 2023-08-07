import React from 'react';

interface DirectionButtonsProps {
  onButtonClick: (direction: string) => void;
}

const DirectionButtons: React.FC<DirectionButtonsProps> = ({ onButtonClick }) => {
  const handleButtonClick = (direction: string) => {
    onButtonClick(direction);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('up')}>Up</button>
      <button onClick={() => handleButtonClick('down')}>Down</button>
      <button onClick={() => handleButtonClick('left')}>Left</button>
      <button onClick={() => handleButtonClick('right')}>Right</button>
    </div>
  );
};

export default DirectionButtons;