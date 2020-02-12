'use strict';
var WIZARD_COUNT = 4;
var userDialog = document.querySelector('.setup');
var userDialogSimilar = userDialog.querySelector('.setup-similar');
var similarListElement = userDialogSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var coatColors = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var wizards = [];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length)];
};

var getRandomWizardName = function () {
  return getRandomArrayElement(wizardNames) + ' ' + getRandomArrayElement(wizardSurnames);
};

var getRandomCoatColor = function () {
  return 'rgb(' + getRandomArrayElement(coatColors);
};

var getRandomEyeColor = function () {
  return getRandomArrayElement(eyeColors);
};

var createRandomWizard = function () {
  return {
    name: getRandomWizardName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyeColor()
  };
};

var createWizards = function (wizardsCount) {
  for (var i = 0; i < wizardsCount; i++) {
    wizards[i] = createRandomWizard();
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizardsCount) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsCount; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

userDialog.classList.remove('hidden');
createWizards(WIZARD_COUNT);
renderWizards(WIZARD_COUNT);
userDialogSimilar.classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
