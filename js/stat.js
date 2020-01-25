'use strict';
var CLOUD_WIDTH = 470;
var CLOUD_HEIGHT = 270;
var COLUMN_WIDTH = 40;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_Y = 260;
var RECTANGLE_Y = 240;
var INDENT_SIDE = 150;
var TOTAL_WIDTH = 90;
var BASE_BAR_HEIGHT = 170;
var COLOR_TEXT = '#000';
var FONT_TEXT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function () {
  return Math.round(Math.random() * 100);
};

var getRoundNumber = function (number) {
  return Math.round(number);
};
var renderText = function (ctx, text, x, y) {
  ctx.font = FONT_TEXT;
  ctx.fillStyle = COLOR_TEXT;
  ctx.fillText(text, x, y);
};
var getRandomColor = function () {
  return 'hsl(255, 100%, ' + getRandomNumber() + '%)';
};
var renderColumn = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7' +
    ')', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderText(ctx, 'Ура Вы победили', CLOUD_X + GAP, 40);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, 60);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var columnColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    var x = INDENT_SIDE + TOTAL_WIDTH * i;
    var barHeight = -((BASE_BAR_HEIGHT * times[i]) / maxTime) + GAP * 2;
    renderColumn(ctx, columnColor, x, RECTANGLE_Y, COLUMN_WIDTH, barHeight);
    renderText(ctx, names[i], x, TEXT_Y);
    renderText(ctx, getRoundNumber(times[i]), x, RECTANGLE_Y + barHeight - GAP);
  }
};

