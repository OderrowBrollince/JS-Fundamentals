function add(a, b) {
    return a + b;
}


const firstArg = process.argv[2];
const secondArg = process.argv[3];


const firstInt = parseInt(firstArg);
const secondInt = parseInt(secondArg);


const result = add(firstInt, secondInt);
console.log(result);