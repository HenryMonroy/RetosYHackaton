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

//before
function loadJson(url){
    return fetch(url).then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
}

loadJson('no-such-user.json').catch(alert);

//after
async function loadJson(url) {
    try {
        let response = await fetch(url);
        if(response.status === 200) {
            let user = await response.json();
            return alert(user);
        } else {
            return alert(response.status);
        }
    } catch (e) {
        return alert(e);
    }
}

loadJson('no-such-user.json');

/**
 *      Ejercicio 04

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new HttpError(response);
        }
    });
}

function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    return loadJson(`https://api.github.com/users/${name}`)
            .then(user => {
                alert(`Full name:${user.name}.`);
                return user;
            })
            .catch(err => {
                if (err instanceof HttpError && err.response.status === 404) {
                    alert("No such user, please reenter.");
                    return demoGithubUser();
                } else {
                    throw err;
                }
            });
}

demoGithubUser();
 */

/**
 *      Ejercicio 05

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    

    wait().then(callBackF);

    return result;
}

console.log(f());
 */

/**
 *      Ejercicio 06
 */

new Promise(function(resolve,reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);//No se activa el catch porque el setTimeout no captura el error

/**
 *      Ejercicio 07
 */

function printNumbers(from, to) {
    setTimeout(() => {
        console.log(from++);
        if (from <= to)
            printNumbers(from,to);
    }, 1000);
}

printNumbers(1,9);