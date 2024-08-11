const db = require('../config/db');

exports.getBannerData = (req, res) => {
  const sql = 'SELECT * FROM banner WHERE id = 1';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.updateBannerData = (req, res) => {
  const { description, timeLeft, link, isVisible } = req.body;
  const sql = `UPDATE banner SET description = ?, timeLeft = ?, link = ?, isVisible = ? WHERE id = 1`;
  db.query(sql, [description, timeLeft, link, isVisible ? 1 : 0], (err, result) => {
    if (err) throw err;
    res.send('Banner updated');
  });
};
