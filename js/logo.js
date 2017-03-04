// Adobe Illustrator to Canvas found at: http://blog.mikeswanson.com/ai2canvas

function init() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#484848";

  draw(ctx);
}

function draw(ctx) {

  // logo/logorectangle
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(103.7, 39.2);
  ctx.lineTo(0.5, 39.2);
  ctx.lineTo(0.5, 7.1);
  ctx.lineTo(103.7, 7.1);
  ctx.lineTo(103.7, 39.2);
  ctx.closePath();
  ctx.stroke();

  // logo/logotext

  // logo/logotext/l
  ctx.save();
  ctx.beginPath();

  // logo/logotext/l/Path
  ctx.moveTo(4.1, 36.0);
  ctx.lineTo(4.1, 0.0);
  ctx.lineTo(7.5, 0.0);
  ctx.lineTo(7.5, 33.1);
  ctx.lineTo(26.8, 33.1);
  ctx.lineTo(26.8, 36.0);
  ctx.lineTo(4.1, 36.0);
  ctx.closePath();
  ctx.fill();

  // logo/logotext/o
  ctx.beginPath();

  // logo/logotext/o/Path
  ctx.moveTo(38.0, 36.7);
  ctx.bezierCurveTo(36.3, 36.7, 34.8, 36.4, 33.3, 35.8);
  ctx.bezierCurveTo(31.9, 35.2, 30.6, 34.4, 29.5, 33.2);
  ctx.bezierCurveTo(28.4, 32.1, 27.6, 30.7, 26.9, 29.0);
  ctx.bezierCurveTo(26.3, 27.3, 26.0, 25.3, 26.0, 23.0);
  ctx.bezierCurveTo(26.0, 21.1, 26.2, 19.4, 26.7, 17.7);
  ctx.bezierCurveTo(27.2, 16.1, 28.0, 14.6, 29.0, 13.4);
  ctx.bezierCurveTo(30.0, 12.2, 31.2, 11.2, 32.7, 10.5);
  ctx.bezierCurveTo(34.2, 9.8, 36.0, 9.4, 38.0, 9.4);
  ctx.bezierCurveTo(40.0, 9.4, 41.8, 9.8, 43.3, 10.5);
  ctx.bezierCurveTo(44.8, 11.2, 46.0, 12.2, 47.0, 13.4);
  ctx.bezierCurveTo(48.0, 14.6, 48.8, 16.0, 49.3, 17.7);
  ctx.bezierCurveTo(49.7, 19.4, 50.0, 21.1, 50.0, 23.0);
  ctx.bezierCurveTo(50.0, 25.1, 49.7, 27.0, 49.1, 28.6);
  ctx.bezierCurveTo(48.6, 30.3, 47.8, 31.8, 46.7, 33.0);
  ctx.bezierCurveTo(45.7, 34.1, 44.4, 35.1, 42.9, 35.7);
  ctx.bezierCurveTo(41.4, 36.4, 39.8, 36.7, 38.0, 36.7);
  ctx.closePath();

  // logo/logotext/o/Path
  ctx.moveTo(46.8, 23.0);
  ctx.bezierCurveTo(46.8, 21.5, 46.6, 20.1, 46.3, 18.8);
  ctx.bezierCurveTo(45.9, 17.4, 45.4, 16.3, 44.7, 15.3);
  ctx.bezierCurveTo(44.0, 14.3, 43.1, 13.5, 42.0, 13.0);
  ctx.bezierCurveTo(40.9, 12.4, 39.6, 12.1, 38.0, 12.1);
  ctx.bezierCurveTo(36.4, 12.1, 35.1, 12.4, 34.0, 13.0);
  ctx.bezierCurveTo(32.8, 13.6, 31.9, 14.5, 31.2, 15.5);
  ctx.bezierCurveTo(30.5, 16.5, 30.0, 17.7, 29.7, 19.0);
  ctx.bezierCurveTo(29.3, 20.3, 29.2, 21.6, 29.2, 23.0);
  ctx.bezierCurveTo(29.2, 24.6, 29.4, 26.1, 29.8, 27.5);
  ctx.bezierCurveTo(30.1, 28.8, 30.7, 30.0, 31.4, 31.0);
  ctx.bezierCurveTo(32.2, 31.9, 33.1, 32.7, 34.2, 33.2);
  ctx.bezierCurveTo(35.3, 33.7, 36.5, 34.0, 38.0, 34.0);
  ctx.bezierCurveTo(39.5, 34.0, 40.9, 33.7, 42.0, 33.1);
  ctx.bezierCurveTo(43.1, 32.5, 44.0, 31.6, 44.7, 30.6);
  ctx.bezierCurveTo(45.4, 29.6, 45.9, 28.4, 46.3, 27.1);
  ctx.bezierCurveTo(46.6, 25.8, 46.8, 24.5, 46.8, 23.0);
  ctx.closePath();
  ctx.fill();

  // logo/logotext/g
  ctx.beginPath();

  // logo/logotext/g/Path
  ctx.moveTo(71.7, 10.1);
  ctx.lineTo(74.7, 10.1);
  ctx.lineTo(74.7, 33.5);
  ctx.bezierCurveTo(74.7, 35.2, 74.6, 36.9, 74.2, 38.5);
  ctx.bezierCurveTo(73.9, 40.1, 73.2, 41.5, 72.3, 42.7);
  ctx.bezierCurveTo(71.4, 43.8, 70.2, 44.8, 68.6, 45.5);
  ctx.bezierCurveTo(67.1, 46.2, 65.0, 46.6, 62.6, 46.6);
  ctx.bezierCurveTo(60.7, 46.6, 59.0, 46.4, 57.7, 45.9);
  ctx.bezierCurveTo(56.3, 45.4, 55.2, 44.8, 54.3, 44.0);
  ctx.bezierCurveTo(53.5, 43.3, 52.8, 42.5, 52.4, 41.6);
  ctx.bezierCurveTo(51.9, 40.7, 51.7, 39.9, 51.6, 39.1);
  ctx.lineTo(54.8, 39.1);
  ctx.bezierCurveTo(55.1, 40.1, 55.4, 40.9, 55.9, 41.5);
  ctx.bezierCurveTo(56.4, 42.1, 57.0, 42.6, 57.7, 43.0);
  ctx.bezierCurveTo(58.4, 43.3, 59.1, 43.6, 60.0, 43.7);
  ctx.bezierCurveTo(60.8, 43.8, 61.7, 43.9, 62.6, 43.9);
  ctx.bezierCurveTo(64.6, 43.9, 66.2, 43.5, 67.5, 42.8);
  ctx.bezierCurveTo(68.7, 42.2, 69.6, 41.2, 70.3, 40.1);
  ctx.bezierCurveTo(70.9, 39.0, 71.3, 37.7, 71.5, 36.2);
  ctx.bezierCurveTo(71.7, 34.8, 71.8, 33.4, 71.7, 31.9);
  ctx.bezierCurveTo(70.8, 33.5, 69.4, 34.7, 67.8, 35.5);
  ctx.bezierCurveTo(66.1, 36.3, 64.3, 36.7, 62.5, 36.7);
  ctx.bezierCurveTo(60.5, 36.7, 58.8, 36.3, 57.4, 35.6);
  ctx.bezierCurveTo(55.9, 34.8, 54.7, 33.8, 53.8, 32.6);
  ctx.bezierCurveTo(52.8, 31.3, 52.1, 29.9, 51.6, 28.2);
  ctx.bezierCurveTo(51.2, 26.5, 50.9, 24.8, 50.9, 23.0);
  ctx.bezierCurveTo(50.9, 21.1, 51.1, 19.3, 51.6, 17.6);
  ctx.bezierCurveTo(52.0, 16.0, 52.7, 14.5, 53.7, 13.3);
  ctx.bezierCurveTo(54.6, 12.1, 55.8, 11.1, 57.3, 10.5);
  ctx.bezierCurveTo(58.7, 9.8, 60.5, 9.4, 62.6, 9.4);
  ctx.bezierCurveTo(63.5, 9.4, 64.3, 9.5, 65.2, 9.8);
  ctx.bezierCurveTo(66.0, 10.0, 66.9, 10.3, 67.7, 10.8);
  ctx.bezierCurveTo(68.5, 11.2, 69.3, 11.7, 70.0, 12.4);
  ctx.bezierCurveTo(70.6, 13.1, 71.2, 13.8, 71.6, 14.6);
  ctx.lineTo(71.7, 14.6);
  ctx.lineTo(71.7, 10.1);
  ctx.closePath();

  // logo/logotext/g/Path
  ctx.moveTo(71.7, 23.1);
  ctx.bezierCurveTo(71.7, 21.6, 71.5, 20.1, 71.2, 18.8);
  ctx.bezierCurveTo(70.8, 17.4, 70.2, 16.3, 69.5, 15.3);
  ctx.bezierCurveTo(68.7, 14.3, 67.8, 13.5, 66.7, 13.0);
  ctx.bezierCurveTo(65.6, 12.4, 64.4, 12.1, 63.0, 12.1);
  ctx.bezierCurveTo(61.7, 12.1, 60.5, 12.3, 59.5, 12.8);
  ctx.bezierCurveTo(58.4, 13.2, 57.5, 13.9, 56.7, 14.8);
  ctx.bezierCurveTo(55.9, 15.6, 55.3, 16.7, 54.8, 17.9);
  ctx.bezierCurveTo(54.4, 19.2, 54.1, 20.6, 54.1, 22.2);
  ctx.bezierCurveTo(54.1, 23.9, 54.2, 25.4, 54.5, 26.8);
  ctx.bezierCurveTo(54.9, 28.2, 55.4, 29.5, 56.1, 30.5);
  ctx.bezierCurveTo(56.9, 31.6, 57.8, 32.5, 58.9, 33.1);
  ctx.bezierCurveTo(60.1, 33.7, 61.4, 34.0, 63.0, 34.0);
  ctx.bezierCurveTo(64.3, 34.0, 65.6, 33.7, 66.7, 33.1);
  ctx.bezierCurveTo(67.7, 32.5, 68.7, 31.8, 69.4, 30.8);
  ctx.bezierCurveTo(70.2, 29.8, 70.7, 28.6, 71.1, 27.3);
  ctx.bezierCurveTo(71.5, 26.0, 71.7, 24.6, 71.7, 23.1);
  ctx.closePath();
  ctx.fill();

  // logo/logotext/o
  ctx.beginPath();

  // logo/logotext/o/Path
  ctx.moveTo(88.8, 36.7);
  ctx.bezierCurveTo(87.2, 36.7, 85.6, 36.4, 84.2, 35.8);
  ctx.bezierCurveTo(82.7, 35.2, 81.4, 34.4, 80.4, 33.2);
  ctx.bezierCurveTo(79.3, 32.1, 78.4, 30.7, 77.8, 29.0);
  ctx.bezierCurveTo(77.1, 27.3, 76.8, 25.3, 76.8, 23.0);
  ctx.bezierCurveTo(76.8, 21.1, 77.1, 19.4, 77.6, 17.7);
  ctx.bezierCurveTo(78.1, 16.1, 78.8, 14.6, 79.8, 13.4);
  ctx.bezierCurveTo(80.8, 12.2, 82.1, 11.2, 83.6, 10.5);
  ctx.bezierCurveTo(85.1, 9.8, 86.8, 9.4, 88.8, 9.4);
  ctx.bezierCurveTo(90.9, 9.4, 92.6, 9.8, 94.1, 10.5);
  ctx.bezierCurveTo(95.6, 11.2, 96.9, 12.2, 97.9, 13.4);
  ctx.bezierCurveTo(98.9, 14.6, 99.6, 16.0, 100.1, 17.7);
  ctx.bezierCurveTo(100.6, 19.4, 100.8, 21.1, 100.8, 23.0);
  ctx.bezierCurveTo(100.8, 25.1, 100.5, 27.0, 100.0, 28.6);
  ctx.bezierCurveTo(99.4, 30.3, 98.6, 31.8, 97.6, 33.0);
  ctx.bezierCurveTo(96.5, 34.1, 95.2, 35.1, 93.8, 35.7);
  ctx.bezierCurveTo(92.3, 36.4, 90.6, 36.7, 88.8, 36.7);
  ctx.closePath();

  // logo/logotext/o/Path
  ctx.moveTo(97.6, 23.0);
  ctx.bezierCurveTo(97.6, 21.5, 97.5, 20.1, 97.1, 18.8);
  ctx.bezierCurveTo(96.8, 17.4, 96.3, 16.3, 95.6, 15.3);
  ctx.bezierCurveTo(94.9, 14.3, 94.0, 13.5, 92.9, 13.0);
  ctx.bezierCurveTo(91.8, 12.4, 90.4, 12.1, 88.8, 12.1);
  ctx.bezierCurveTo(87.3, 12.1, 85.9, 12.4, 84.8, 13.0);
  ctx.bezierCurveTo(83.7, 13.6, 82.8, 14.5, 82.1, 15.5);
  ctx.bezierCurveTo(81.4, 16.5, 80.9, 17.7, 80.5, 19.0);
  ctx.bezierCurveTo(80.2, 20.3, 80.0, 21.6, 80.0, 23.0);
  ctx.bezierCurveTo(80.0, 24.6, 80.2, 26.1, 80.6, 27.5);
  ctx.bezierCurveTo(81.0, 28.8, 81.5, 30.0, 82.3, 31.0);
  ctx.bezierCurveTo(83.0, 31.9, 83.9, 32.7, 85.0, 33.2);
  ctx.bezierCurveTo(86.1, 33.7, 87.4, 34.0, 88.8, 34.0);
  ctx.bezierCurveTo(90.4, 34.0, 91.7, 33.7, 92.9, 33.1);
  ctx.bezierCurveTo(94.0, 32.5, 94.9, 31.6, 95.6, 30.6);
  ctx.bezierCurveTo(96.3, 29.6, 96.8, 28.4, 97.1, 27.1);
  ctx.bezierCurveTo(97.5, 25.8, 97.6, 24.5, 97.6, 23.0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.restore();
}
