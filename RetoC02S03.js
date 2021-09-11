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