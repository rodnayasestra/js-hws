// Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);

const dataList = document.querySelectorAll(".dishes > li");
dataList.forEach((item) => {
  console.log(item.dataset.id);
});
