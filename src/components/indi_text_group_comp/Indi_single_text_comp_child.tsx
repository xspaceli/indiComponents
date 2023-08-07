import React from 'react';

// interface indi_text {
//   name: string;
//   label: string;
//   text: string;
// }

// interface TextBoxProps {
//   data: indi_text;
// }
declare interface TextBoxProps {
  data: indi_text;
}

const TextBox: React.FC<TextBoxProps> = ({ data }) => {
  return (
    <div>
      <label
        style={{
          marginTop:"30px",
          textAlign: 'center',
          marginRight: '16px',
          display: 'flex',
          alignItems: 'center',
        }}
        htmlFor={data.name}
      >
        {data.label}
      </label>
      <div>{data.text}</div>
    </div>
  );
};

export default TextBox;
