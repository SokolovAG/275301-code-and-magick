'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 20, 420, 270);

  ctx.fillStyle = '000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

  var maxIndex = -1;

for  (var i = 0; i < times.length; i++)
  var time = times[i];
  if (time > max) {
    max = time;
    maxIndex = i;
  }

  for  (var i = 0; i < times.length; i++) {

    var histogramHeight = 150;
    var step = histogramHeight / (max - 0);
    var colHeight = 150;
    var colWidth = 40;
    var space = 50;
    var initialX = 80;
    var initialY = 100;
    var lineHeight = 20;

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + initialY + space * i, times[i] * step, colHeight + colWidth + lineHeight);
  }

};
