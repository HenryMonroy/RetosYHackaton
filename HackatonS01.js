let alert = require('alert');

//Ejercicio 01

let admin;
let name;

name = "Jhon";
admin = name;

alert(admin);

//Ejercicio 02

let ourPlanet = "Earth";

let nameCurrentVisitor = "Hector";

//Ejercicio 03

const BIRTHDAY = '18.04.1982'; // no es el estandar
const AGE = ageByBirthday(BIRTHDAY); //no es el estandar

function ageByBirthday(birthday) {
    return 39;
}

console.log(BIRTHDAY);
console.log(AGE);

//Ejercicio 04

let name = "Ilya";

alert(`hello ${1}`); //hello 1

alert(`hello ${"name"}`); //hello name

alert(`hello ${name}`); //hello Ilya

//Ejercicio 05

let user = {}; //paso 1

user.name = "John"; //paso 2

user.surname = "Smith"; //paso 3

user.name = "Pete"; //paso 4

delete user.name; //paso 5

console.log(user);

//Ejercicio 06

function isEmpty(obj){
    return Object.keys(schedule).length == 0;
}

let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

//Ejercicio 07

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

var sumSalaries;
if (Object.keys(salaries).length != 0) {
    sumSalaries = 0
    for (let key in salaries) {
        sumSalaries += salaries[key];
    }
}
else {
    sumSalaries = 0
}

console.log(sumSalaries);

//Ejercicio 08

function multiplyNumeric(obj) {
    if (Object.keys(obj).length != 0) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title:"My menu"
}

console.log(menu);

multiplyNumeric(menu);

console.log(menu)
