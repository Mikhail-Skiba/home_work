// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.
alert("message");
undefined;
alert("What is your name");
undefined; //спробував якщо написати шось інше,до прикладу

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let name = prompt("What is your name?");
undefined;
name;
("Misha");
name = "Misha";
("Misha");
console.log(name);
Misha;

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let age = prompt("Сколько тебе лет?", 13);
undefined;
age;
("13");
age = 13;
13;
console.log(age);
13;

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let isSchool = confirm("Здесь школа?");
undefined;
isSchool;
true;
console.log(isSchool);
true;
undefined;

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let isCollor = confirm("This collor is red?");
undefined;
isCollor;
true;
console.log(isCollor);
true;
if (isCollor) {
  alert(1);
}
undefined;

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
("red");
console.log(isCollor);
red;
undefined;
if (isCollor) {
  alert(1);
} else {
  alert(2);
}
undefined;

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
console.log(isCollor);
red;
undefined;
if (isCollor) {
  console.log(1);
} else if ("blue") {
  console.log(2);
} else {
  console.log(3);
}

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна
let isCollor = confirm("This collor is red?");
undefined;
isCollor;
true;
isCollor = "red";
console.log(isCollor);
true;
undefined;
switch (isCollor) {
  case "red": {
    console.log(1);
  }
}

// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
console.log(isCollor);
red;
undefined;
switch (isCollor) {
  case "red": {
    console.log(1);
  }
  case "blue": {
    console.log(2);
  }
}

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
console.log(isCollor);
red;
undefined;
switch (isCollor) {
  case "red": {
    console.log(1);
  }
  case "blue": {
    console.log(2);
  }
  case "green": {
    console.log(3);
  }
}

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
console.log(isCollor);
red;
undefined;
if (isCollor) {
  console.log(1);
} else if ("blue") {
  console.log(2);
} else {
  console.log(3);
}
//
let isCollor = prompt("This collor is red?");
undefined;
isCollor;
("red");
isCollor = "red";
console.log(isCollor);
red;
undefined;
switch (isCollor) {
  case "red": {
    console.log(1);
  }
  case "blue": {
    console.log(2);
  }
  case "green": {
    console.log(3);
  }
}
//
let age = prompt("Сколько тебе лет?");
undefined;
age;
("30");
age = 30;
30;
console.log(age);
30;
if (age) {
  console.log(1);
} else if (<=30) {
  console.log(2);
} else {
  console.log(>=30);
}
