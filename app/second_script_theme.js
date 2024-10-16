const buttonTop = document.getElementById('theme-toggle');
const buttonBottom = document.getElementById('theme-toggle-bottom'); // Вторая кнопка
const container = document.getElementById('theme-switch');
const containerBottom = document.getElementById('theme-switch-bottom'); // Контейнер второй кнопки
const background = document.getElementById('background-theme');
const blackText = document.getElementById('black-text');
const imageBike = document.getElementById('image-bike');
const headerText = document.getElementById('container-one-title-text');
const headerTextParagraph = document.getElementById(
  'container-one-paragraph-text'
);
const headerTitleDescriptionOne = document.getElementById(
  'title-description-one'
);
const xiaomiLogo = document.getElementById('xiaomi-logo');
const navList = document.getElementById('nav-list');
const headerTextTwo = document.getElementById('container-two-title-text');
const headerTextThree = document.getElementById('header-text-three');
const mainTextOne = document.getElementById('main-text-title-one');
const mainTextFour = document.getElementById('container-four-text-container');
const mainTextApp = document.getElementById('app-container-paragraph');
const mainAppStore = document.getElementById('app-store');
const mainGooglePlay = document.getElementById('google-play');
const mainMobilePhoto = document.getElementById('main-mobile-photo');
const footerScooterContainer = document.getElementById('buy-scooter-container');
const footerScooterImage = document.getElementById('footer-scooter-image');

let moved = false; // Переменная для отслеживания состояния

function toggleTheme() {
  moved = !moved; // Переключаем состояние в начале
  console.log('Theme toggled. Current state:', moved); // Отладочный лог

  if (moved) {
    buttonTop.style.transform = 'translateX(122px)'; // Перемещение вправо на 122px
    buttonBottom.style.transform = 'translateX(122px)'; // Перемещение второй кнопки
    buttonTop.textContent = 'Черный'; // Изменяем текст кнопки
    buttonBottom.textContent = 'Черный'; // Текст второй кнопки
    buttonTop.style.backgroundColor = 'rgba(21, 21, 21, 1)';
    buttonBottom.style.backgroundColor = 'rgba(21, 21, 21, 1)'; // Цвет второй кнопки
    buttonTop.style.color = 'rgba(241, 241, 241, 1)';
    buttonBottom.style.color = 'rgba(241, 241, 241, 1)'; // Цвет текста второй кнопки
    container.style.border = '3px solid rgba(21, 21, 21, 1)';
    containerBottom.style.border = '3px solid rgba(21, 21, 21, 1)'; // Бордер второй кнопки
    blackText.textContent = '';
    background.style.backgroundColor = 'rgba(224, 224, 224, 1)';
    imageBike.style.backgroundImage = 'url(images/black_bike.png)';
    headerText.style.color = 'rgba(255, 76, 13, 1)';
    headerTextTwo.style.color = 'rgba(21, 21, 21, 1)';
    headerTextThree.style.color = 'rgba(21, 21, 21, 1)';
    headerTextParagraph.style.color = 'rgba(21, 21, 21, 1)';
    headerTitleDescriptionOne.style.color = 'rgba(255, 76, 13, 1)';
    xiaomiLogo.style.backgroundImage = 'url(images/xiaomi_logo_red.png)';
    navList.style.color = 'rgba(21, 21, 21, 1)';
    mainTextOne.style.color = 'rgba(21, 21, 21, 1)';
    mainTextFour.style.color = 'rgba(21, 21, 21, 1)';
    mainTextApp.style.color = 'rgba(21, 21, 21, 1)';
    mainAppStore.style.backgroundImage = 'url(images/app_store_black.svg)';
    mainGooglePlay.style.backgroundImage = 'url(images/google_play_black.svg)';
    mainMobilePhoto.style.backgroundImage = 'url(images/white_phone.png)';
    footerScooterContainer.style.backgroundImage =
      'url(images/scooter_bg_white.png)';
    footerScooterImage.style.backgroundImage =
      'url(images/footer_scooter_black.svg)';
  } else {
    buttonTop.style.transform = 'translateX(0)'; // Возвращаем на место
    buttonBottom.style.transform = 'translateX(0)'; // Возвращаем вторую кнопку на место
    buttonTop.textContent = 'Белый'; // Изменяем текст кнопки обратно
    buttonBottom.textContent = 'Белый'; // Текст второй кнопки обратно
    buttonTop.style.backgroundColor = 'rgba(241, 241, 241, 1)';
    buttonBottom.style.backgroundColor = 'rgba(241, 241, 241, 1)'; // Цвет второй кнопки обратно
    buttonTop.style.color = 'rgba(34, 34, 34, 1)';
    buttonBottom.style.color = 'rgba(34, 34, 34, 1)'; // Цвет текста второй кнопки обратно
    container.style.border = '3px solid rgba(241, 241, 241, 1)';
    containerBottom.style.border = '3px solid rgba(241, 241, 241, 1)'; // Бордер второй кнопки обратно
    blackText.textContent = 'Черный';
    background.style.backgroundColor = 'rgba(34, 34, 34, 1)';
    imageBike.style.backgroundImage = 'url(images/white_bike.png)';
    headerText.style.color = 'rgba(241, 241, 241, 1)';
    headerTextTwo.style.color = 'rgba(241, 241, 241, 1)';
    headerTextThree.style.color = 'rgba(241, 241, 241, 1)';
    headerTextParagraph.style.color = 'rgba(255, 76, 13, 1)';
    headerTitleDescriptionOne.style.color = 'rgba(241, 241, 241, 1)';
    xiaomiLogo.style.backgroundImage = 'url(images/xiaomi_logo.png)';
    navList.style.color = 'rgba(241, 241, 241, 1)';
    mainTextOne.style.color = 'rgba(255, 76, 13, 1)';
    mainTextFour.style.color = 'rgba(241, 241, 241, 1)';
    mainTextApp.style.color = 'rgba(241, 241, 241, 1)';
    mainAppStore.style.backgroundImage = 'url(images/app_store_white.svg)';
    mainGooglePlay.style.backgroundImage = 'url(images/google_play_white.svg)';
    mainMobilePhoto.style.backgroundImage = 'url(images/black_phone.png)';
    footerScooterContainer.style.backgroundImage = 'url(images/scooter_bg.png)';
    footerScooterImage.style.backgroundImage = 'url(images/footer_scooter.svg)';
  }
}

// Привязываем одну и ту же функцию к обеим кнопкам
buttonTop.addEventListener('click', toggleTheme);
buttonBottom.addEventListener('click', toggleTheme);
