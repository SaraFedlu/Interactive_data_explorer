import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataExplorer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/data/processed');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Explorer</h1>
      {/* Display the data as needed */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataExplorer;