/**
 *      Ejercicio 00
 */

let unique = (arr) => {
    arrTemp = arr.filter((value, index, self) => self.indexOf(value) === index);
    console.log(arrTemp);
}

let values = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-O"];

unique(values);
console.log(values);

/**
 *      Ejercicio 01
*/

const aclean = (arr) => {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values())
}

let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];

console.log(aclean(arr));

/**
 *     Ejecrcicio 02
 */

let map = new Map();

map.set("name", "John");

console.log(map);

let keys = map.keys();

keys.push = (key, value) => {
    map.set(key,value);
}

console.log(keys);

keys.push("more");

console.log(map);
console.log(keys);

/**
 *     Ejecrcicio 03
 */

let i = 3;

while(i)
{
    alert(i--);//Se crea un bucle infinito porque la condición del while es siempre true
}


/**
 *     Ejecrcicio 04
 */

let i = 0 ;
while (++i < 5) console.log(i);//primero incremente luego evalua

let j = 0;
while (j++ < 5) console.log(j);//primero evalua luego incrementa


/**
 *     Ejecrcicio 05
 */

//Before
function ask(question, yes, no) {
    if(confirm(question))
        yes();
    else
        no();
}

ask(
    "Do you agree?",
    function(){
        alert("You agreed.");
    },
    function(){
        alert("You canceled the execution.");
    }
);


//After
let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));


/**
 *     Ejecrcicio 06
 */

const makeCounter = {
    count: 0,
    counter: function() {
        this.count = ++this.count;
        return this.count;
    },
    set: function(value) {
        this.count = value;
        return this.count;
    },
    decrease: function() {
        this.count = --this.count;
        return this.count;
    }
}

console.log(makeCounter.counter());
console.log(makeCounter.set(100));
console.log(makeCounter.decrease());

/**
 *     Ejecrcicio 07
 */

const greaterHundred = () => {
    let input = prompt("Ingrese un número mayor a 100");
    if(input === null || isNaN(parseInt(input))) {
        return;
    } else {
    while(parseInt(input) > 100) greaterHundred();
    }
}

greaterHundred();

/**
 *     Ejecrcicio 08
 */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function PrintList() {
    this.loop = function (mainList) {
        while(mainList !== null) {
            let value = mainList.value;
            mainList = mainList.next;
            console.log(value);
        }
    };

    this.recursive = function(mainList) {
        if (mainList !== null) {
            let value = mainList.value;
            console.log(value);
            this.recursive(mainList.next);
        }
    }
}

let printList = new PrintList;

printList.loop(list);
printList.recursive(list);