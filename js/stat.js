'use strict';
var CLOUD_WIDTH = 470;
var CLOUD_HEIGHT = 270;
var COLUM_WIDHT = 40;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_Y = 260;
var REDUCTION = 50;
var RECTANGLE_Y = 240;
var INDENT_SIDE = CLOUD_X + REDUCTION;
var TOTAL_WIDHT = REDUCTION + COLUM_WIDHT;
var BASE_BAR_HEIGHT = CLOUD_HEIGHT - 2 * REDUCTION;

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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7' +
    ')', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '16px  PT Mono ';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 60);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, 100%, ' + getRandomNumber() + '%)';
    }
    var textNumber = getRoundNumber(times[i]);
    var x = INDENT_SIDE + TOTAL_WIDHT * i;
    var barHeight = -((BASE_BAR_HEIGHT * times[i]) / maxTime) + GAP * 2;
    ctx.fillText(textNumber, x, TEXT_Y + barHeight);
    ctx.fillRect(x, RECTANGLE_Y, COLUM_WIDHT, barHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], x, TEXT_Y);
    ctx.fillText(getRoundNumber(times[i]), x, RECTANGLE_Y + barHeight - GAP);
  }
};
