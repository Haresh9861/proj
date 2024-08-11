import React from 'react';
import Banner from '../Components/Banners';

const HomePage = ({ bannerData }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Banner
        description={bannerData.description}
        timeLeft={bannerData.timeLeft}
        link={bannerData.link}
        isVisible={bannerData.isVisible}
      />
    </div>
  );
};

export default HomePage;
