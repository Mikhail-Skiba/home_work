// 1. Створіть функцію за допомогою "function expression".

let color = function () {
  console.log("red");
};

// 2. Створіть функцію за допомогою "new Function".

let sum = new Function("x", "y", "return x+y");
console.log(sum(7, 6));

// 3. Створіть функцію за допомогою "arrow function".

let sum = (x, y) => x + y;
console.log(sum(8, 9));

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.

let user = {
  name: "Misha",
  age: 26,
};
function age(man, callback) {
  if (man.age > 18) {
    callback(man);
  }
}

function name(natalia) {
  console.log(natalia);
}

age(misha, name);

// 5. Створіть рекурсивну функцію.

function getFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}
let result = getFactorial(4);
// 6. Створіть самовикликаючусь функцію.

(function (a) {
  console.log(a);
})(1);

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.

function name() {
  console.log(...arguments);
}
name(1, 2, 3);
