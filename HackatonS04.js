/**
 *      Ejercicio 00
 */

let promise = new Promise(
    function(resolve, reject){
        resolve(1);
        setTimeout(() => resolve(2), 1000);
    }
);

promise.then(alert);//Devuelve 1

/**
 *      Ejercicio 01
 */

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

delay(3000).then(() => alert('runs after 3 seconds'));

/**
 *      Ejercicio 02
 */

/**
 *      Ejercicio 03
 */

/**
 *      Ejercicio 04
 */

/**
 *      Ejercicio 05
 */

/**
 *      Ejercicio 06
 */

/**
 *      Ejercicio 07
 */