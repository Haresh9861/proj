import React from 'react';
import Dashboard from '../components/Dashboard';

const BannerSettingsPage = ({ setBannerData }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Dashboard setBannerData={setBannerData} />
    </div>
  );
};

export default BannerSettingsPage;
