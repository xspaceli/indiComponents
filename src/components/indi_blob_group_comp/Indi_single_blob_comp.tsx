import React from 'react';


interface Indi_blob_group_comp_property{
  property_name: string;
  property_info: {
    type: string;
    data: IIndi_blob[] ;
    // 这个地方接口需要修改
    permission: string;
  };
}

const FakeData: Indi_blob_group_comp_property = {
  property_name: "DEBUG",
  property_info: {
    type: "blob",
    data: [
      { name: "ENABLE", label: "Enable", size: "xxx" },
      { name: "DISABLE", label: "Disable", size: "xxx" }
    ],
    permission: "ReadWrite"
  }
};

const Indi_single_blob_comp: React.FC = () => {
  return (
    <div>
      <h1>{FakeData.property_name}</h1>
      <h2>Property Info</h2>
      <p>Type: {FakeData.property_info.type}</p>
      <h3>Data</h3>
      <ul>
        {FakeData.property_info.data.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Label: {item.label}</p>
            <p>Size: {item.size}</p>
          </li>
        ))}
      </ul>
      <p>Permission: {FakeData.property_info.permission}</p>
    </div>
  );
};

export default Indi_single_blob_comp;