// setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище.
// getItem(key) - возвращает из хранилища значение с ключом key.
// removeItem(key) - удаляет из хранилища запись с ключом key.
// clear() - полностью очищает все записи в хранилище.
// length - хранит количество записей в хранилище.

// Используя метод setItem(key, value) можно добавить новую запись в виде пары ключ:значение.

localStorage.setItem("theme", "dark");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

// если нужно добавить что то кроме строки, нужно преобразовать данные в строку методом JSON.stringify()

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

// Чтение и метод localStorage.getItem()

// чтобы получить значение какой-либо настройки в методе getItem необходимо передать имя настройки в строке.

// Если в хранилище нет записи с таким ключом, метод возвращает null. Когда значение это обычная строка - нет необходимости её парсить.

const theme = localStorage.getItem("theme");
console.log("theme->", theme);

// чтобы получить значение обьекта настроек его необходимо распарсить.

const savedSettings = localStorage.getItem("settings");
// console.log("savedSettings->", savedSettings);
// const parsedSettings = JSON.parse(savedSettings);
// console.log("parsedSettings->", parsedSettings);

// не забываем использовать конструкцию try catch, мы не застрахованы от невалидного JSON

try {
  const parsedSettings = JSON.parse(savedSettings);
  //   console.log("parsedSettings->", parsedSettings);
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}

// Удаление и метод localStorage.removeItem()

// чтобы удалить какой то ключ из обьекта настроек, нужно указать его как строку в методе localStorage.removeItem()

localStorage.removeItem("theme");
console.log(localStorage.getItem("theme"));

// ПОЛНАЯ ОЧИСТКА (ОПАСНО, ПРОВЕРЯТЬ НЕ БУДУ ПРОВЕРЯТЬ В КОДЕ)
// localStorage.clear()
