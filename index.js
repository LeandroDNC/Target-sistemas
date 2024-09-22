function fibonacciSequence(limit) {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}

function checkFibonacci() {
    const numberInput = document.getElementById("numberInput").value;
    const resultMessage = document.getElementById("resultMessage");

    const number = parseInt(numberInput, 10);
    if (isNaN(number)) {
        resultMessage.textContent = "Insira um número válido.";
        return;
    }

    const fibSequence = fibonacciSequence(number);
    const belongs = fibSequence.includes(number);

    if (belongs) {
        resultMessage.textContent = `${number} pertence à sequência de Fibonacci.`;
    } else {
        resultMessage.textContent = `${number} não pertence à sequência de Fibonacci.`;
    }
}

document.getElementById("checkButton").addEventListener("click", checkFibonacci);

// segundo teste

function countLetterA() {
    const textInput = document.getElementById("textInput").value;
    const resultMessage = document.getElementById("resultMessage2");

    const lowerCaseText = textInput.toLowerCase();
    const count = (lowerCaseText.match(/a/g) || []).length;

    if (count > 0) {
        resultMessage.textContent = `A letra 'a' aparece ${count} vez(es) na frase.`;
    } else {
        resultMessage.textContent = "A letra 'a' não foi encontrada na frase.";
    }
}

document.getElementById("checkButton2").addEventListener("click", countLetterA);
