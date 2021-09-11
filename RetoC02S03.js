/**
 *      Ejercicio 01
 */

let calcCircunference = (radius) => {
    let result = 2 * Math.PI * radius;
    console.log(`La longitud de la circunferencia de radio ${radius} es ${result}`);
}

calcCircunference(3);

let calcArea = (radius) => {
    let result = Math.PI * (radius ** 2);
    console.log(`El área del circulo de radio ${radius} es ${result}`);
}

calcArea(3);

/**
 *      Ejercicio 02
 */

let calculateDogAge = (ageDog, rateCalc = 7) => {
    let result = ageDog * rateCalc;
    if(!isNaN(result))
        console.log(`Tu perrito tiene ${result} años en años de perro!`);
    else
    console.log(`No se pudo calcular los años de vida de tu perrito`);
}

calculateDogAge();
calculateDogAge(5);
calculateDogAge(5,6.5);