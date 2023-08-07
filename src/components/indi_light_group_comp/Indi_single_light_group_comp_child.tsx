

interface FakeData {
  name: string;
  label: string;
  status: string;
}

interface FakeDataComponentProps {
  data: FakeData;
}

const FakeDataComponent: React.FC<FakeDataComponentProps> = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.label}</p>
      <p>{data.status}</p>
    </div>
  );
};

export default FakeDataComponent;