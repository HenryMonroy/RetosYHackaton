/**
 *      Ejercicio 00
*/
 

let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete,mary];

console.log(users);

let usersMapped = users.map((user) => {
    var nUser = {};
    nUser.fullName = `${user.name} ${user.surname}`;
    nUser.id = user.id;
    return nUser;
});

console.log(usersMapped);

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

/**
 *      Ejercicio 01
*/
 

let fruits = ["Apples", "Pear", "Orange"];

//Forma incorrecta de copiar/clonar un arreglo

//let shoppingCart = fruits;

//shoppingCart.push("Banana");

//console.log(fruits);
//console.log(shoppingCart);

//Forma correcta de copiar/clonar un arreglo

let nShoppingCart = [...fruits];
nShoppingCart.push("Banana");

console.log(fruits);
console.log(nShoppingCart);

/**
 *      Ejercicio 02
*/
 

let styles = ["Jazz","Blues"];

console.log(styles);

styles.splice(styles.length, 0, "Rock-n-Roll");

console.log(styles);

const indexMiddle = (length) => {
    if (length % 2 == 0)
        return length / 2 - 1;
    else
        return length / 2;
}

styles.splice(indexMiddle(styles.length), 1, "Classics");

console.log(styles);

styles.splice(0, 1);

console.log(styles);

styles.splice(0, 0,"Rap","Reggae");

console.log(styles);

/**
 *      Ejercicio 03
*/

let numbers = [];

const sumInput = () => {
    let input = prompt("Ingrese un valor a sumar");
    console.log(input);
    if(input === null || isNaN(parseInt(input))) {
        if (numbers.length > 0){
            let sum = numbers.reduce((acc, curr) => {
                return acc + curr;
            });
            alert(`La suma total es ${sum}`);
        } else
        alert(`La suma total es 0`);
        
    } else {
        numbers.push(parseInt(input));
        sumInput();
    }
}

sumInput();

/**
 *      Ejercicio 04
*/
 
let arr = [5, 3, 8, 1];

const filterRange = (arrToFilter, a, b) => {
    return arrToFilter.filter(arrItem => a <= arrItem && arrItem <= b)
}

let filtered = filterRange(arr, 6, 9);

console.log(arr);
console.log(filtered);

/**
 *      Ejercicio 05
*/
 

const copySorted = (arr) => {
    return [...arr].sort();
}

let arr = ["HTML", "JavaScript","CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

/**
 *      Ejercicio 06
 */

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }

    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        
        if (!this.methods[op] || isNaN(a) || isNaN(b))
            return NaN;
        
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
};

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);

/**
 *      Ejercicio 08
*/

let mensaje;

let login = "dfcsdfsd";

if (login == "Empleado") {
    mensaje = "Hola";
} else if (login == "Director") {
    mensaje = "Saludos";
} else if (login == "") {
    mensaje = "Sin inicio de sesión";
} else {
    mensaje = "";
}

mensaje = login == "Empleado" ? "Hola" : 
            login == "Director" ? "Saludos" :
                login == "" ? "Sin inicio de sesión" : "";

console.log(mensaje);