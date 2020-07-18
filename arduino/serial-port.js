/* arduino/serial-port.js */

// 시리얼 통신 기본 모듈 포함
const SerialPort = require('serialport');

// 시리얼 통신을 위해 연결된 포트의 인스턴스
const serialPort = new SerialPort('/dev/cu.usbmodem146302', {
  baudRate: 9600 
}, false);

// 다른 파일에서 'serialPort'를 사용할 수 있도록 exports 해줌
module.exports = serialPort;