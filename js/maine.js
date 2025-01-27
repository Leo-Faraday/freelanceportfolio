// Находим кнопку переключения темы
const btnDarkmode = document.querySelector('.dark-mode-btn');

// Функция для установки темы
function setTheme(theme) {
    document.body.className = theme; // Устанавливаем класс для <body>
    btnDarkmode.classList.toggle("dark-mode-btn--active", theme === "dark");
    localStorage.setItem("theme", theme); // Сохраняем тему в localStorage
}

// Определяем начальную тему
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Если пользователь уже выбрал тему, используем её, иначе берем системную тему
    const theme = savedTheme ? savedTheme : (systemPrefersDark ? "dark" : "light");
    setTheme(theme);
}

// Переключение темы при нажатии на кнопку
btnDarkmode.onclick = function () {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
};

// Устанавливаем слушатель на системные изменения темы
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const systemTheme = e.matches ? "dark" : "light";
    setTheme(systemTheme);
});

// Инициализируем тему при загрузке страницы
initializeTheme();

// Находим все ссылки, которые ведут к якорям
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Плавно скроллим к целевому элементу
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
