// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.

const name = "Misha";
const surName = "Skiba";
console.log(`${name} ${surName}`);

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.

const name = "Misha";
name.length;

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.

const name2 = "Misha";
name2.length;
name2[0];

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.

const name3 = "Misha";
name3.length;
name3[4];

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.

let name = "misha";
name.toUpperCase();

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.

let surName = "SKIBA";
surName.toLowerCase();

// 7. Створіть змінну і присвойте в неї дату вашого народження.

let user = {
  birthdate: new Date(1989, 11, 24),
};

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).

let user = {
  birthdate: new Date(1989, 11, 24),
};
user.birthdate.getFullYear();

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).

let user = {
  birthdate: new Date(1989, 11, 24),
};
user.birthdate.getMonth();

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).

let user = {
  birthdate: new Date(1989, 11, 24),
};
user.birthdate.getDay();

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).

let user = new Date("1989-11-24");
console.log(date);

// 12. Створіть нову дату яка має 14 годину і 23 хвилини.

let date = new Date();
date.setHours(14, [23]);
date;

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.

let now = new Date();
let yesterday = new Date();
now;
yesterday;
yesterday.setHours(-1);
yesterday;
now > yesterday;
now < yesterday;
console.log(now);
console.log(yesterday);
