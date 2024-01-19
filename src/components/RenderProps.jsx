import { useEffect, useState } from 'react';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes('desserts')) {
      setData(['cake', 'ice cream', 'pie', 'brownies']);
    } else {
      setData(['water', 'soda', 'juice']);
    }
  }, []);
  return render(data);
};

const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  );
};

const RenderProps = () => {
  return (
    <div>
      <h1>RenderProps</h1>
      <DessertCount />
      <DrinksCount />
    </div>
  );
};

export default RenderProps;
