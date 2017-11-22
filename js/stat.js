'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);


  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }

    for (var i = 0; i < times.length; i++) {

      var colHeight = 120;
      var colWidth = 40;
      var step = colHeight / max;
      var space = 90;
      var initialX = 120;
      var initialY = 80;
      var lineHeight = 20;

      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + colWidth + space * i, initialY, colWidth, times[i] * step);
      ctx.fillText(names[i], initialX + colWidth + space * i, initialY + 170);
      ctx.fillText(times[i].toFixed(0), initialX + colWidth + space * i, initialY - 5);
    }

  }
};
