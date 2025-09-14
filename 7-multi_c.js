const firstArg = process.argv[2];
const x = parseInt(firstArg);

if (isNaN(x) || x < 0) {
    console.log("Missing number of occurrences");
} else {
    // Use a while loop to print "C is fun" x times
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}