import React, { useState } from 'react';
import ParentComponent from './components/indi_number_group_comp/Indi_single_number_comp';
import { Indi_single_text_comp } from './components/indi_text_group_comp/Indi_single_text_comp';


interface indi_number {
  name: string;
  label: string;
  value: number;
  max: number;
  min: number;
}

const App: React.FC = () => {
  const [variable, setVariable] = useState({
    name: 'TELESCOPE_FOCAL_LENGTH',
    label: 'Focal Length (mm)',
    value: 900.0,
    max: 10000.0,
    min: 10.0,
  });

  const handleVariableChange = (updatedVariable: indi_number) => {
    setVariable(updatedVariable);
    // 控制台打印数据，可添加提交后端数据
    console.log(updatedVariable);
  };


  
  return (
    <div>
      <h1>我是APP入口文件</h1>
      <ParentComponent
        variable={variable}
        onVariableChange={handleVariableChange}
      />
    <Indi_single_text_comp></Indi_single_text_comp>
      {/* <Indi_switch data={[]}></Indi_switch> */}
    </div>
  );
};

export default App;
