// src/api/bannerAPI.js

const mockBannerData = {
    description: 'Welcome to our website!',
    timeLeft: 60,
    link: 'http://example.com',
    isVisible: true,
  };
  
  export const getBannerData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockBannerData);
      }, 500);
    });
  };
  
  export const updateBannerData = (newData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        Object.assign(mockBannerData, newData);
        resolve(mockBannerData);
      }, 500);
    });
  };
  