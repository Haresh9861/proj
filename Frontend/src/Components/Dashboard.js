import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timeLeft: 0,
    link: '',
    isVisible: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await axios.post('/api/banner', bannerData);
  };

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <label>Description:</label>
      <input name="description" value={bannerData.description} onChange={handleChange} />
      <label>Time (seconds):</label>
      <input name="timeLeft" type="number" value={bannerData.timeLeft} onChange={handleChange} />
      <label>Link:</label>
      <input name="link" value={bannerData.link} onChange={handleChange} />
      <label>Visible:</label>
      <input name="isVisible" type="checkbox" checked={bannerData.isVisible} onChange={() => setBannerData({ ...bannerData, isVisible: !bannerData.isVisible })} />
      <button onClick={handleSubmit}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
