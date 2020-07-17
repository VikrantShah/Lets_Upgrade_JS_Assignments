// Getting the name and version
let nameAndVersion = prompt("Please neter the name and version of OS. (Seperated by space)");

nameAndVersion = nameAndVersion.split(" ");

console.log(`The OS name is ${nameAndVersion[0]} and version is ${nameAndVersion[1]}`);