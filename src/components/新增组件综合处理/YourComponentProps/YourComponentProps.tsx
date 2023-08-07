import React from 'react';
// import Indi_single_number_comp from '../../indi_number_group_comp/Indi_single_number_comp';

declare interface Property {
  property_name: string;
  property_info: {
    type: string;
    data: Array<{
      name: string;
      label: string;
      [key: string]: any; // 添加此行以处理可能的其他键值对
    }>;
    permission: string;
  };
}

interface YourComponentProps {
  data: Property[]; // 组件接收名为 data 的属性
}

const YourComponent: React.FC<YourComponentProps> = ({ data }) => {
  return (
    <div>
      {data.map((property) => {
        const { type, data: propertyData } = property.property_info;

        // 根据 type 渲染不同类型的组件
        if (type === 'SWITCH') {
          return (
            <div key={property.property_name}>
              <h2>{property.property_name}</h2>
              {propertyData.map((item) => {
                const { name, label, switch: switchValue } = item;
                return (
                  <div key={name}>
                    <label>{label}</label>
                    <input type="checkbox" checked={switchValue} readOnly />
                  </div>
                );
              })}
            </div>
          );
        }

        if (type === 'TEXT') {
          // 渲染 Text 类型的组件，类似处理 SWITCH 类型
        }

        if (type === 'NUMBER') {
        }

        return null;
      })}
    </div>
  );
};

export default YourComponent;
