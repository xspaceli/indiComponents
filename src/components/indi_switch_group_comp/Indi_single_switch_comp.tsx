import React from 'react';
import { Switch } from '@mui/material';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Indi_single_switch_comp: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div>
    
      <label>{label}</label>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Indi_single_switch_comp;
