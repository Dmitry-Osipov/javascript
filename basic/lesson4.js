// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 !== 0) {
        console.log(i + " - нечетное число");
    } else {
        console.log(i + " - четное число");
    }
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
let originalArray = [1, 2, 3, 4, 5, 6, 7];
let newArray = [];
for (const element of originalArray) {
    if (element !== 4 && element !== 5) {
        newArray.push(element);
    }
}
console.log(newArray);

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
let randomNums = [];
for (let i = 0; i < 5; i++) {
    randomNums.push(Math.round(Math.random() * 9));
}
console.log(randomNums.reduce((acc, current) => acc + current, 0));
console.log(Math.min(...randomNums));
console.log(randomNums.includes(3));
