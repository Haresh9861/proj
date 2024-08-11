import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BannerSettingsPage from './pages/BannerSettingsPage';
import { getBannerData, updateBannerData } from './api/bannerAPI';

const App = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timeLeft: 0,
    link: '',
    isVisible: false,
  });

  useEffect(() => {
    getBannerData().then(data => {
      setBannerData(data);
    });
  }, []);

  const handleUpdateBannerData = (newData) => {
    updateBannerData(newData).then(updatedData => {
      setBannerData(updatedData);
    });
  };

  return (
    <Router>
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/banner-settings" className="hover:text-gray-200">Banner Settings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage bannerData={bannerData} />} 
        />
        <Route 
          path="/banner-settings" 
          element={<BannerSettingsPage setBannerData={handleUpdateBannerData} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
