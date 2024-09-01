// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let userInput = prompt("Please enter number: ");
let num1 = Number(userInput);
console.assert(num1 <= 1);
userInput = prompt("Please enter number: ");
let num2 = Number(userInput);
console.assert(num2 >= 3);

// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
let test = true;
console.log(test === true ? "+++" : "---");

// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это
// число (в первую, вторую или третью).
let day = 15;
if (day >= 1 && day <= 10) {
    console.log("First");
} else if (day >= 11 && day <= 20) {
    console.log("Second");
} else if (day >= 21 && day <= 31) {
    console.log("Third");
} else {
    console.log("Incorrect");
}
