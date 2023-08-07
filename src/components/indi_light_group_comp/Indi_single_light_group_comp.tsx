import React from 'react';
import FakeDataComponent from './Indi_single_light_group_comp_child';

const Indi_single_light_group_comp: React.FC = () => {
  const fakeData = {
    name: 'John Doe',
    label: 'Example Label',
    status: 'Active',
  };

  return (
    <div>
      <h2>Fake Data Component Example</h2>
      <FakeDataComponent data={fakeData} />
    </div>
  );
};

export default Indi_single_light_group_comp;