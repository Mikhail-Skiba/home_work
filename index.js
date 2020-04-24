var x; //Оголосив
x = "Hello World"; //Присвоїв
var x = "Hello World";
let z; //Оголосив
z = "Hello Friends"; //Присвоїв
let z = "Hello Friends"; //(Стрінг)
const m = "Hello World";
var name = "Misha"; //Оголосив змінну ,якій можна міняти значення
name = "Mikhail";
var name = "Misha",
  age = 30,
  sex = "male"; // Можна і в один ряд записувати все через кому,але як ти казав і це лоічно,що в великих проектах це буде бардак(не читабельно)
const surname = "Skiba"; //Ти кажеш,що в 4-тій було,що конст не можливо було перезаписати,якщо я правильно зрозумів
let name = "Misha"; //Змінна оголошена і має значення
let age = null; // і змінна яка не відома
//Строка(string) в JavaScript має бути в кавичках.
let str = "Hello"; // як ти і пояснював ,або двойні або одинарні
let n = 123;
n = 12.345; //Числовой тип данных (number) представляє цілісне значення, так і числа з плаваючою крапкою.
let x;
alert(x); //Змінна оголошена,але тут ми не присвоїли їй ніякого значення,то її значенням буде undefined
let x = 777;
x = undefined;
alert(x); //"undefined"//Але так робити не рекомендують,зазвичай використовують null для присвоєння перемінній пустого або невідомого значення
let user = new Student(); //або з такими дужками{}
let user = {
  name: "Misha",
  age: 30,
  surname: "Skiba",
  sex: "male",
  country: "Ukraine",
};
// Коротко,на рахунок кавичок,ти сказав ,що  одинарні прийнято писати тут
'Hello World'// стрінга
777//чисто намбер
true// буліан
false//
let obj = {}//обєкт
let arr = []//масив
let func = function{ }()//функція
//Називати змінну не можна зарезирвованим словом(але в написанні коду,воно автоматично підскаже це)
var Str = 'Hello Man!'; //Стрінг
console.log(typeof Str);  // string
var x = 30;  // number
var y = 7.77;
console.log(x + y); // 37,77
console.log(typeof y);  // number
typeof x
var isCooking = true;   // Boolean Data Type
var isSweeming = false;
console.log(typeof isCooking);  // Boolean
var person = {
    name: 'Misha',
    age: 30,
    surname: 'Skiba',
};//Object
var person = ['Misha', 'Skiba', 30];//Array
function sayHi() {
    alert("Hi, My name is Misha!");
}
var greeting = function () {
    return "Hi Friend!";
}
alert(typeof greeting) //Function
var x;
var y = 'Hello Friends!'
alert(x)//Undefined
var x = null;
alert(x); // null
var person = {
    name: "Misha",
    age: 30,
    surname: "Skiba",
    sex: "male",
    country: "Ukraine",
};