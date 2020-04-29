x = 1;
y = 2;
x == y;
console.log(x == y);
x = 4;
y = 4;
x == y;
console.log(x == y); //1

x = 2;
y = 4;
x != 2;
console.log(x != 2);
x != 4;
console.log(x != 4); //2

x = 5;
y = "6";
x === y;
console.log(x === y);
x == y;
true;
a = 2;
b = 2;
a === b;
console.log(a === b); //3

a = 2;
2;
b = 4;
4;
a !== 2;
a !== 4;
console.log(a !== 4);
console.log(a !== 2); //4

a = 4;
b = 6;
a > b;
console.log(a > b);
b > a;
console.log(a > b); //5

x = 2;
y = 3;
x >= y;
console.log(x >= y);
y >= x;
console.log(y >= x); //6

x = 3;
y = 4;
y < x;
console.log(y < x);
x < y;
console.log(x < y); //7

a = 3;
b = 4;
b <= a;
console.log(b <= a);
a <= b;
console.log(a <= b); //8

x = 3;
y = 4;
x === 1 && y === 4;
x === 3 && y === 4;
console.log(x === 1 && y === 4);
console.log(x === 3 && y === 4); //9

a = 4;
b = 3;
a === 3 || b === 4;
a === 4 || b === 4;
console.log(a === 3 || b === 4);
console.log(a === 4 || b === 4); //10

x = 2;
y = 3;
x = !2;
x = !!2;
x = !true;
x = !false;
console.log((x = !2));
console.log((x = !!2)); //11

"My name is " + "Misha";
let a = "My name is ";
let b = "Misha";
a + b;
a = +b;
console.log("My name is " + "Misha");
console.log(a + b);
console.log((a += b)); //12

let type = (color = "red") ? "пожежна" : "медична";
let color = "red";
let type = (color = "red") ? "пожежна" : "медична";
type;
console.log(type);
let color = "blue";
let type = (color = "red") ? "пожежна" : "медична";
type;
console.log(type); //13

let obj = { key1: "Misha", key2: "Skiba" };
obj.key2;
delete obj.key2;
console.log(obj); //14

let colors = ["red", "green", "blue", "yellow"];
delete colors[2];
console.log(colors); //15

var myphone = { make: "iphone", model: "adge" };
"make" in myphone;
"model" in myphone;
"year" in myphone;
console.log(myphone); //16

let colors = ["red", "green", "black", "yellow", "blue"];
0 in colors;
3 in colors;
5 in colors;
console.log(colors); //17
