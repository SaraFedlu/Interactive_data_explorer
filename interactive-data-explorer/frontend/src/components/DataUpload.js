import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const DataUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/data/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('File upload failed.');
    }
  };

  return (
    <div className="login-page">
        <h1>Interactive Data Explorer</h1>
        <h5>A Rich Dataset Visualization Tool</h5>
        <div className="file-upload-container">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <p>{message}</p>
        </div>
    </div>
  );
};

export default DataUpload;