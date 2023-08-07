import { useState } from 'react';
import SwitchComponent from './src/components/indi_switch_group_comp/Indi_single_switch_comp';
import SampleComponent from './src/components/indi_blob_group_comp/Indi_single_blob_comp';
import App1 from './src/App1';
import App from './src/App';
import ParentComponent from './src/components/indi_light_group_comp/Indi_single_light_group_comp';

// 定义一个虚拟数据对象
const FakeData = {
  "property_name": "DEBUG", // 属性名称
  "property_info": {
    "type": "SWITCH", // 属性类型为开关
    "data": [
      { "name": "ENABLE", "label": "Enable", "switch": false }, // 开启选项
      { "name": "DISABLE", "label": "Disable", "switch": true } // 关闭选项
    ],
    "permission": "ReadWrite" // 权限为读写
  }
};

const App2 = () => {
  // 使用useState钩子函数来管理开关组件的状态
  const [switchStates, setSwitchStates] = useState(FakeData.property_info.data);

  // 处理开关状态改变的函数
  const handleSwitchChange = (isChecked: boolean, name: string) => {
    // 更新开关组件的状态
    const updatedSwitchStates = switchStates.map(item => {
      if (item.name === name) {
        // 如果是当前操作的开关，则更新其状态
        return { ...item, switch: isChecked };
      }
      return item;
    });

    // 更新状态变量并打印到控制台
    setSwitchStates(updatedSwitchStates);
    console.log(`Switch ${name} checked: ${isChecked}`);
  };

  return (
    <div>
      <App1></App1>
      <App></App>
      <SampleComponent></SampleComponent>
      <ParentComponent></ParentComponent>
      <h1>{FakeData.property_name}</h1> {/* 显示属性名称 */}
      {/* 遍历开关状态变量，并渲染相应的开关组件 */}
      {switchStates.map(item => (
        <SwitchComponent
          key={item.name}
          label={item.label}
          //  显示开关的标签 
          onChange={(isChecked) => handleSwitchChange(isChecked, item.name)} 
          //  绑定开关状态改变的回调函数 
          checked={item.switch} 
          //  设置开关的初始状态 
        />
      ))}
    </div>
  );
};

export default App2;