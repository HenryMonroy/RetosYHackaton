const promptForGuess = () => {
    const guess = parseInt(prompt('Ingrese un número para validar'));
    if (!isNaN(guess)) {
        if(guess > 0) {
            alert(`1`);
        } else if(guess == 0) {
            alert(`0`)
        } else if(guess < 0) {
            alert(`-1`)
        }
    } else {
        alert(`No ingresó un número, vuelva a intentarlo`);
        promptForGuess();
    }
    
};

promptForGuess();