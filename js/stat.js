'use strict';

window.renderStatistics = function (ctx, names, times) {

  var colHeight = 150; // высота колонки
  var colWidth = 40; // ширина колонки
  var step = colHeight / max; //  расечт пропорции
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
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270); // тень облака

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270); // рисуем облако

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 120, 40); // текст облака
  ctx.fillText('Список результатов', 120, 60);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + colWidth + space * i, initialY + step * times[i], colWidth, colHeight - step); // генерируем колонку
    ctx.fillText(names[i], initialX + colWidth + space * i, initialY + 170); // генерируем имя
    ctx.fillText(times[i].toFixed(0), initialX + colWidth + space * i, initialY - 5); // генерируем вермя
  }
};
