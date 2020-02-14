'use strict';
var WIZARD_COUNT = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var userDialog = document.querySelector('.setup');
var userDialogSimilar = userDialog.querySelector('.setup-similar');
var similarListElement = userDialogSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var playerWizard = document.querySelector('.setup-wizard');
var wizardCoat = playerWizard.querySelector('.wizard-coat');
var wizardEye = playerWizard.querySelector('.wizard-eyes');
var wizardFireball = playerWizard.querySelector('.setup-fireball');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var coatColors = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];

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

var getRandomFireballColor = function () {
  return getRandomArrayElement(fireballColors);
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

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var onSetupCloseClick = function () {
  closePopup();
};

var onSetupOPenKeydown = function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var onSetupOpenClick = function () {
  openPopup();
};

var onSetupCloseKeydown = function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
};

var changeCoatColors = function () {
  wizardCoat.style.fill = getRandomCoatColor(coatColors);
};

var changeFireballColor = function () {
  wizardFireball.style.fill = getRandomFireballColor();
};

var changeEyeColors = function () {
  eyeColors.style.fill = getRandomEyeColor();
}

setupOpen.addEventListener('click', onSetupOpenClick());

setupOpen.addEventListener('keydown', onSetupOPenKeydown());

setupClose.addEventListener('click', onSetupCloseClick());

setupClose.addEventListener('keydown', onSetupCloseKeydown());

wizardCoat.addEventListener('click', function () {
  changeCoatColors();
});

wizardFireball.addEventListener('click', function () {
  changeFireballColor();
});

eyeColors.addEventListener('click', function () {
  changeEyeColors();
});

