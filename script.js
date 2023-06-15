// Функція для зміни тексту кнопки
function changeButtonText() {
    var button = document.querySelector('.btn-main');
    button.textContent = 'Переглянути всі новинки';
  }
  
  // Функція для зміни фону шапки
  /* масив с картинками */
  var backgrounds = [
    'image/backg.jpg',
    'image/banners.jpg'
  ];
  var currentIndex = 0;
  var myBlock = document.getElementById('changeBlock');
  /* функция вызываемая при каждом нажатии на блок с ванкликом 37 строчкка кода */
  function changeBackground() {
    /* увеличения индекса картинки */
    currentIndex = (currentIndex + 1) % backgrounds.length;
    /* установка новой картинки на задний фон */
    myBlock.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
  }
  // Виклик функцій при завантаженні сторінки
  window.onload = function() {
    changeButtonText();
  };
  