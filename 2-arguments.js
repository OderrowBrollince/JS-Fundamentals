const userArgs = process.argv.slice(2);
const argCount = userArgs.length;

if (argCount === 0) {
    console.log("No argument");
} else if (argCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}