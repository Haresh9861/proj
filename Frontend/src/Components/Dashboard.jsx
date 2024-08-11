import React, { useState } from 'react';

const Dashboard = ({ setBannerData }) => {
  const [bannerData, setLocalBannerData] = useState({
    description: 'Welcome to our website!',
    timeLeft: 60,
    link: 'http://example.com',
    isVisible: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setBannerData(bannerData);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Banner Settings</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Description:</label>
        <input
          name="description"
          value={bannerData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Time (seconds):</label>
        <input
          name="timeLeft"
          type="number"
          value={bannerData.timeLeft}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Link:</label>
        <input
          name="link"
          value={bannerData.link}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Visible:</label>
        <input
          name="isVisible"
          type="checkbox"
          checked={bannerData.isVisible}
          onChange={() =>
            setLocalBannerData({ ...bannerData, isVisible: !bannerData.isVisible })
          }
          className="mr-2 leading-tight"
        />
        <span className="text-gray-700">Show Banner</span>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Update Banner
      </button>
    </div>
  );
};

export default Dashboard;
