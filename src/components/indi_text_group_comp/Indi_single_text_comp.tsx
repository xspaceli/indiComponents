import TextBox from './Indi_single_text_comp_child';

export const Indi_single_text_comp: React.FC = () => {
  const data = {
    name: 'DRIVER_NAME',
    label: 'Name',
    text: 'Telescope Simulator',
  };

  return (
    <div>
      <TextBox data={data} />
    </div>
  );
};
