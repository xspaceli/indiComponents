import React, { useState } from 'react';
import { TextField } from '@mui/material';

declare interface NumberChildProps {
  variable: indi_number;
  onChange: (updatedValue: number) => void;
}

const Indi_single_number_comp: React.FC<NumberChildProps> = ({
  variable,
  onChange,
}) => {
  const [value, setValue] = useState(variable.value);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);

    if (newValue < variable.min || newValue > variable.max) {
      setError(`请输入 ${variable.min} 到 ${variable.max} 之间的数字`);
    } else {
      setError('请输入阿拉伯数字');
    }

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={{ width: '200px', height: '100px' }}>
      <TextField
        style={{ width: '200px', height: '30px', display: 'flex' }}
        type="number"
        id={variable.name}
        value={value}
        onChange={handleChange}
        inputProps={{
          min: variable.min,
          max: variable.max,
        }}
        error={!!error}
        helperText={error}
      />
      <label
        style={{
          textAlign: 'center',
          marginRight: '16px',
          marginTop: '70px',
          display: 'flex',
          alignItems: 'center',
        }}
        htmlFor={variable.name}
      >
        {variable.label}
        {/* ({variable.unit}) 显示单位 */}
      </label>
    </div>
  );
};

export default Indi_single_number_comp;
