import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const Visualization = () => {
  const [plotData, setPlotData] = useState(null);

  useEffect(() => {
    const fetchVisualizationData = async () => {
      const response = await axios.post('/api/visualization/render', { type: 'bar_chart', data: {} });
      setPlotData(response.data);
    };
    fetchVisualizationData();
  }, []);

  return (
    <div>
      <h1>Visualization</h1>
      {plotData && (
        <Plot
          data={plotData.data}
          layout={plotData.layout}
        />
      )}
    </div>
  );
};

export default Visualization;