const express = require('express');
const { getBannerData, updateBannerData } = require('../controllers/bannerController');

const router = express.Router();

router.get('/banner', getBannerData);
router.post('/banner', updateBannerData);

module.exports = router;
