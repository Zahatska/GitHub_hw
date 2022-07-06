// 1. Написать скриптик, который сосчитает и выведет
//  результат от возведения 2 в степень 10, начиная
//  со степени 1
let degree = 1;
while (degree <= 10) {
  let result = Math.pow(2, degree);
  degree++;
  console.log(result);
}

// 1*. Преобразовать 1 задачу в функцию, принимающую
//  на вход степень, в которую будет возводиться число 2

let what_degree;
function twoIn(what_degree) {
  console.log(Math.pow(2, what_degree));
}
twoIn(6);

// 2. Написать скрипт, который выведет 5 строк в консоль
//  таким образом, чтобы в первой строчке выводилось :),
//  во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let smile = ":)";
let result = "";
let i = 0;
while (i <= 5) {
  result += smile;
  i++;
  console.log(result);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на
//  вход строку, которая и будет выводиться в консоль
// (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)
function printSmile(row, numberOfRows) {
  let result = "";
  for (let i = 0; i < numberOfRows; i++) {
    result += row;
    console.log(result);
  }
}
printSmile("text ", 5);

// 3**.  Написать функцию, которая принимает на вход слово.
//  Задача функции посчитать и вывести в консоль, сколько в
// слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и
// (число) согласных букв
const getWordStructure = (word) => {
  i = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const consonants = "qwrtpsdfghjklzxcvbnm".split(""); // разбивает стрингу на массив, отдельно каждый элемент
  let sumVowels = 0;
  let sumConsonants = 0;
  for (i; word[i].toLowwerCase === vowels; i++) {
    return (sumVowels += 1);
  }
  for (i; word[i].toLowwerCase === consonants; i++) {
    return (sumConsonants += 1);
  }
  console.log(
    `word ${word} contains ${sumVowels} vowels and ${sumConsonants} consonants! `
  );
};
getWordStructure("leto");

// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является
// ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

// почитай про тот же метод массива forEach, что он принимает в себя и как через переменную общается с данными
