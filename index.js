let age = 30;
age = String(age);
typeof age;
console.log(typeof age); //1

let age = 30;
age = Boolean(age);
typeof age;
console.log(typeof age); //2

let age = 30;
age = Null();
typeof age;
console.log(typeof age); //3

let name = "Misha";
name = Number(name);
typeof name;
console.log(typeof name); //4

let name = "Misha";
undefined;
name = Boolean("name");
true;
typeof name;
("boolean");
console.log(typeof name);
boolean;
undefined; //5

let name = "Misha";
undefined;
name = null;
null;
typeof name;
("object");
console.log(typeof name);
object;
undefined; //6

let name = true;
undefined;
name = String(name);
("true");
typeof name;
("string");
console.log(typeof name);
string;
undefined; //7

let name = true;
undefined;
name = Number(name);
1;
typeof name;
("number");
console.log(typeof name);
number;
undefined; //8

let name = true;
undefined;
name = null;
null;
typeof name;
("object");
console.log(typeof name);
object;
undefined; //9

let name = null;
undefined;
name = String(name);
("null");
typeof name;
("string");
console.log(typeof name);
string;
undefined; //10

let age = null;
undefined;
age = Number(null);
0;
typeof age;
("number");
console.log(typeof age);
number;
undefined; //11

let age = null;
undefined;
age = Boolean(age);
false;
typeof age;
("boolean");
console.log(typeof age);
boolean;
undefined; //12

function getName() {}
function getName() {
  return;
}
let getName = function () {}; //13 ще є if,else

function showName() {
  alert("Misha");
} //14

function getName() {
  return "Misha";
}
undefined;
getName();
("Misha"); //15

let Name = function (arg1) {
  return arg1;
};
undefined;
let Name = "Misha";
Name("Misha");
("Misha"); //16

let sum = function (arg1, arg2) {
  return arg1 + arg2;
};
undefined;
sum(17, 13);
30;
let a = 17;
let b = 13;
sum(a, b); //17

let sum = function (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
};
undefined;
sum(25, 15, 10);
50;
let a = 25;
let b = 15;
let c = 10;
sum(a, b, c);
//18
