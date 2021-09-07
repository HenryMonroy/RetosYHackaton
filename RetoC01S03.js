/**
 *      Reto 01
 */

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(`${i} es par`);
    else
        console.log(`${i} es impar`);
}

/**
 *      Reto 02
 */

for (var i = 0; i <= 10; i++) {
    let resultado = i * 2;
    console.log(`2 * ${i} = ${resultado}`);
}

/**
 *      Reto 03
 */

 for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        let resultado = i * j;
        console.log(`${i} * ${j} = ${resultado}`);
    }
}