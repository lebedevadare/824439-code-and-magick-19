'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsColors = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];

var wizards = [];
var getRandomElement = function (arr) {
  return arr[Math.round((Math.random() * (arr.length - 1)))];
};

var getRandomWizardName = function () {
  return getRandomElement(wizardNames) +
    ' ' + getRandomElement(wizardSurnames);
};

var createRandomWizards = function (arr, numberWizards) {
  for (var i = 0; i < numberWizards; i++) {
    arr[i] = {
      name: getRandomWizardName(),
      coatColor: getRandomElement('rgb(' + wizardsColors + ')'),
      eyeColor: getRandomElement(eyeColors),
    }
    ;
  }
};
var renderWizards = function (name, surname, colorcloak, coloreye) {
  for ( i = 0; i < wizards.length; i++ ) {
    wizards[i] =createRandomWizards();
  }

}
