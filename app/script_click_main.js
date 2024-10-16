function changeStyleMain(clickedElement) {
  // Получаем все контейнеры
  const containers = document.querySelectorAll('.main_click_active');

  // Убираем класс 'active' у всех контейнеров
  containers.forEach((container) => {
    container.classList.remove('main_active');
  });

  // Добавляем класс 'active' только к нажатому контейнеру
  clickedElement.classList.add('main_active');
}
