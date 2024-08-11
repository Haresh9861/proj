import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await axios.get('/api/banner');
      setBannerData(response.data);
    };
    fetchBannerData();
  }, []);

  return (
    <div>
      <Banner 
        description={bannerData.description}
        timeLeft={bannerData.timeLeft}
        link={bannerData.link}
        isVisible={bannerData.isVisible}
      />
      <Dashboard />
    </div>
  );
};

export default App;
