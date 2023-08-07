import React from 'react';
import YourComponent from './components/新增组件综合处理/YourComponentProps/YourComponentProps';

const App1: React.FC = () => {
  const backendData = {
    // 后端返回的数据
    type: 'data',
    message: 'see data',
    data: [
      {
        property_name: 'CONNECTION',
        property_info: {
          type: 'SWITCH',
          data: [
            { name: 'CONNECT', label: 'Connect', switch: true },
            { name: 'DISCONNECT', label: 'Disconnect', switch: false },
          ],
          permission: 'ReadWrite',
        },
      },
      {
        property_name: 'DRIVER_INFO',
        property_info: {
          type: 'TEXT',
          data: [
            {
              name: 'DRIVER_NAME',
              label: 'Name',
              text: 'Telescope Simulator',
            },
            {
              name: 'DRIVER_EXEC',
              label: 'Exec',
              text: 'indi_simulator_telescope',
            },
            { name: 'DRIVER_VERSION', label: 'Version', text: '1.0' },
            { name: 'DRIVER_INTERFACE', label: 'Interface', text: '5' },
          ],
          permission: 'ReadOnly',
        },
      },
      {
        property_name: 'POLLING_PERIOD',
        property_info: {
          type: 'NUMBER',
          data: [
            {
              name: 'PERIOD_MS',
              label: 'Period (ms)',
              value: 250.0,
              max: 600000.0,
              min: 10.0,
            },
          ],
          permission: 'ReadWrite',
        },
      },
    ],
  };

  return <div><YourComponent data={backendData.data} /> </div>  ;
};

export default App1;
