// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.

let countries = ["Ukraine", "USA", "Germany"];
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let user = {
  name: "Misha",
  age: 30,
  city: "Uzhorod",
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.city);

// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let colors = ["red", "green", "black", "yellow", "blue"];
console.log(colors.pop());
console.log(colors);

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let colors = ["red", "green", "black"];
colors.push("blue");
console.log(colors);

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву

let colors = ["red", "green", "black", "yellow", "blue"];
console.log(colors.shift());
console.log(colors);

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let colors = ["red", "green", "black", "yellow", "blue"];
console.log(colors.unshift("apple"));
console.log(colors);

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

for (let key in onTable) {
  console.log(onTable[key]);
}

// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

for (let key in burger) {
  console.log(key);
}

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.

let onTable = [
  ["apple", "watermelon"],
  ["grape", "nut"],
  ["pen", "pencil"],
];
console.log(onTable);
for (let key in onTable) {
  console.log(onTable[key]);
}
// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.
burger = {
  smallburger: {
    name: "Маленький бургер",
    cost: 7000,
    ccal: 250,
  },
  bigburger: {
    name: "Большой бургер",
    cost: 9000,
    ccal: 340,
  },
};
console.log(burger);
for (let key in burger) {
  console.log(key);
}
