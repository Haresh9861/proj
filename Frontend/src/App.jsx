import React, { useState } from 'react';
import Banner from './Components/Banners';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [bannerData, setBannerData] = useState({
    description: 'Welcome to our website!',
    timeLeft: 60,
    link: 'http://example.com',
    isVisible: true,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Banner
        description={bannerData.description}
        timeLeft={bannerData.timeLeft}
        link={bannerData.link}
        isVisible={bannerData.isVisible}
      />
      <Dashboard setBannerData={setBannerData} />
    </div>
  );
};

export default App;
