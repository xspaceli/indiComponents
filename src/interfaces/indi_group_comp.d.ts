declare interface indi_number {
  name: string;
  label: string;
  value: number;
  max: number;
  min: number;
  // unit: string; // 假设新增字段：单位
}

declare interface indi_text {
  name: string;
  label: string;
  text: string;
}
declare interface IIndi_blob {
  name: string;
  label: string;
  size: string;
}
// declare interface TextBoxProps {
//   data: indi_text;
// }

// declare interface NumberProps {
//   variable: indi_number;
//   onVariableChange: (updatedVariable: indi_number) => void;
// }

// declare interface NumberChildProps {
//   variable: indi_number;
//   onChange: (updatedValue: number) => void;
// }

// declare interface Property {
//   property_name: string;
//   property_info: {
//     type: string;
//     data: Array<{
//       name: string;
//       label: string;
//       [key: string]: any; // 添加此行以处理可能的其他键值对
//     }>;
//     permission: string;
//   };
// }
