'use strict';

window.renderStatistics = function (ctx, names, times) {

  var colHeight = 150; // высота колонки
  var colWidth = 40; // ширина колонки
  var space = 90; // расстояние между колонками
  var initialX = 120; // координата x
  var initialY = 80; // координата y

  var maxVal = function () { // находим максимальное значение
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var step = colHeight / maxVal(); //  расечт пропорции

  var getRandomVal = function (minValue, maxValue) { // находим рандомное значение для расчета прозрачности
    return Math.random() * (maxValue - minValue) + minValue;
  };


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270); // тень облака

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270); // рисуем облако

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 120, 40); // текст облака
  ctx.fillText('Список результатов', 120, 60);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + getRandomVal(0.1, 1) + ')'; // окрашиваем колонки
    ctx.fillRect(initialX + colWidth + space * i, initialY + (colHeight - times[i] * step), colWidth, times[i] * step); // генерируем колонки
    ctx.fillText(names[i], initialX + colWidth + space * i, initialY + 170); // генерируем имя
    ctx.fillText(times[i].toFixed(0), initialX + colWidth + space * i, initialY - 5); // генерируем время
  }
};
