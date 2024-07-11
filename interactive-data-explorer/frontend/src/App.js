import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import DataUpload from './components/DataUpload';
import DataExplorer from './components/DataExplorer';
import Visualization from './components/Visualization';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<DataUpload />} />
        <Route path="/explore" element={<DataExplorer />} />
        <Route path="/visualize" element={<Visualization />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;