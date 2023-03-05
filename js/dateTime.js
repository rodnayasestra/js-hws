const date = new Date();
console.log(date); // при таком логе будет выводится строка, а не обьект даты. Так как в строчном преобразовании обьект возвращает результат вызова toString
console.log(date.toString());

console.log(date.getTime()); // Метод getTime() возвращает числовое представление даты (timestamp) - количество миллисекунд прошедших с полночи 1 января 1970 года.

const teamMeetingDate = new Date("March 16 2023"); // При создании экземпляра класса Date, можно установить дату строкой или числами. Строка может описывать только дату или дату и время.
console.log("teamMeetingDate->", teamMeetingDate);

const preciseTeamMeetingDate = new Date("March 16, 2023 14:25:00");
console.log(preciseTeamMeetingDate); // установка времени в виде строк внутренне вызывает метод date.parse(), который преобразовывает время, указанное в строке. Именно поэтому формат передаваемой строки очень гибкий. Например, можно не указывать ноль для дней и месяца.

// console.log(new Date("2030-03-16"));
// console.log(new Date("2030-03"));
// console.log(new Date("2030"));
// console.log(new Date("03/16/2030"));
// console.log(new Date("2030/03/16"));
// console.log(new Date("2030/3/16"));
// console.log(new Date("March 16, 2030"));
// console.log(new Date("March 16, 2030 14:25:00"));
// console.log(new Date("2030-03-16 14:25:00"));
// console.log(new Date("2030-03-16T14:25:00"));
// console.log(new Date("16 March 2030"));

const numberedDate = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(numberedDate);
