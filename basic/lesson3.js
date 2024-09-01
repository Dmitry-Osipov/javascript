// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль
// результат 2^3 степени + 3 ^ 3 степени
let powFunc = () => console.log(2 ** 3 + 3 ** 3);
powFunc();

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за
// вычетом налогов равен значение"
function calculateNetSalary() {
    let userInput = prompt("Enter your salary: ");
    let salary = Number(userInput);

    if (isNaN(salary)) {
        console.log("Incorrect input");
    } else {
        let netSalary = salary * 0.87;
        console.log("Размер заработной платы за вычетом налогов равен " + netSalary);
    }
}
calculateNetSalary();

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение
// среди этих чисел
let maxFunc = (num1, num2, num3) => console.log(Math.max(num1, num2, num3));
let input1 = Number(prompt("Enter first number: "));
let input2 = Number(prompt("Enter second number: "));
let input3 = Number(prompt("Enter third number: "));
maxFunc(input1, input2, input3);

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести
// число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять
// значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из
// большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки
// на NaN, Infinity делать не нужно.
let sum = (num1, num2) => console.log(num1 + num2);
let sub = (num1, num2) => num1 > num2 ? console.log(num1 - num2) : console.log(num2 - num1);
let mul = (num1, num2) => console.log(num1 * num2);
let div = (num1, num2) => num2 != 0 ? console.log(num1 / num2) : console.log("Error");
sum(1, 4);
sub(1, 2);
sub(40, 14);
mul(2, 6);
div(12, 0);
div(25, 5);
