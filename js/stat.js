'use strict';
var CLOUD_WIDTH = 470;
var CLOUD_HEIGHT = 270;
var COLUM_WIDTH = 40;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_Y = 260;
var RECTANGLE_Y = 240;
var INDENT_SIDE = 150;
var TOTAL_WIDTH = 90;
var BASE_BAR_HEIGHT = 170;

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
var renderText = function (ctx, text, x, y, color, font) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
var renderColor = function (ctx, names) {
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, 100%, ' + getRandomNumber() + '%)';
    }
  }
};
var renderColumn = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7' +
    ')', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderText(ctx, 'Ура Вы победили', CLOUD_X + GAP, 40, '#000', '16px PT Mono');
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, 60, '#000', '16px PT Mono');
  var maxTime = getMaxElement(times);
  var x = INDENT_SIDE + TOTAL_WIDTH * i;
  var barHeight = -((BASE_BAR_HEIGHT * times[i]) / maxTime) + GAP * 2;
  renderColumn(ctx, renderColor, x, RECTANGLE_Y, COLUM_WIDTH, barHeight);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(names[i], x, TEXT_Y);
  ctx.fillText(getRoundNumber(times[i]), x, RECTANGLE_Y + barHeight - GAP);
};

