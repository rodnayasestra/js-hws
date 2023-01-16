// TASK

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// TASK DECISION
function findLongestWord(string) {
  const words = string.split(" ");
  let max = 0;
  let longestWord;
  for (const word of words) {
    if (longestWord > max) {
      longestWord = word;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
