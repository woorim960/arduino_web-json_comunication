/* routes/home.js */

// 라우팅을 위한 기본 모듈 포함
const express = require('express'),
  router = express.Router();
  // serialPort = require('../arduino/serial-port'); // 시리얼 통신을위한 모듈 포함

// 라우팅
router.get('/', (req, res) => {
  res.render('home/main');
});

router.post('/arduino', (req, res) => {
  const data = {
    sensor : 'gps',
    time : 132352342451,
    data : [
      1.5352515,
      4642.5352
    ],
    distance : 2.5
  }; 
  
  // res.render('home/main');
  res.json(data);
})

// 모듈 내보내기
module.exports = router;