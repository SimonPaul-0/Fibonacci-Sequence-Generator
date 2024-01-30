function generateFibonacci(n) {
    let fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence;
}

function main() {
    console.log("Fibonacci Sequence Generator");

    const n = parseInt(prompt("Enter the number of terms in the sequence:"));

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a positive integer.");
    } else {
        const fibonacciResult = generateFibonacci(n);
        console.log("Fibonacci Sequence:", fibonacciResult);
    }
}

main();
