import React from 'react';
import NumberVariable from './Indi_single_number_comp_child';

interface NumberProps {
  variable: indi_number;
  onVariableChange: (updatedVariable: indi_number) => void;
}

const Indi_single_number_comp: React.FC<NumberProps> = ({
  variable,
  onVariableChange,
}) => {
  const handleVariableChange = (updatedValue: number) => {
    const updatedVariable = { ...variable, value: updatedValue };
    onVariableChange(updatedVariable);
    // 我在引用组件处做打印数据
    console.log(updatedValue);
  };

  return (
    <div>
      <h1>Parent Component组件如下</h1>
      <NumberVariable variable={variable} onChange={handleVariableChange} />
    </div>
  );
};

export default Indi_single_number_comp;
