function changeStyle(clickedElement) {
  // Получаем все контейнеры
  const containers = document.querySelectorAll('.click_active');

  // Убираем класс 'active' у всех контейнеров
  containers.forEach((container) => {
    container.classList.remove('active');
  });

  // Добавляем класс 'active' только к нажатому контейнеру
  clickedElement.classList.add('active');
}
