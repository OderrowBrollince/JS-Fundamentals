const firstArg = process.argv[2];

// Check if first argument exists
if (firstArg === undefined) {
    console.log("No argument");
} else {
    console.log(firstArg);
}