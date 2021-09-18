async function doTask(iterations) {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if(number === 6)
            return "Se ha sacado un 6";
    }
    return numbers;
}

console.log(doTask(10));