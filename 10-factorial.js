function factorial(n) {
    
    if (isNaN(n) || n < 0) {
        return 1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    
    return n * factorial(n - 1);
}


const firstArg = process.argv[2];


const num = parseInt(firstArg);


const result = factorial(num);
console.log(result);