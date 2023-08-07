import React from 'react';
import DirectionButtons from '../directionButtons/DirectionButtons';

const ParentComponent: React.FC = () => {
  const handleButtonClick = (direction: string) => {
    console.log(`Button clicked: ${direction}`);
    // 在这里编写相应的逻辑来处理按钮点击事件
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <DirectionButtons onButtonClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;