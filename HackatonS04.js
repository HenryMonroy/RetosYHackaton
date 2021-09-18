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

promise.then(f1).catch(f2);//en este fragmento de código se ejecuta f1 y si devuelve null se ejecuta el catch.

promise.then(f1,f2);//en este fragmento de código se ejecuta primero f1 devolviendo un resultado que captura f2

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