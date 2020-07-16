// String methods
let str = "Some random string";
console.log(str);

console.log(str.charCodeAt(5));

console.log(str.search("dom"));

console.log(str.match("dom"));

console.log(str.replace("o", "a"));

console.log(str.substring(5, 7));

console.log(str.substr(1, 3));

console.log(str.slice(1, -3));

console.log(str.split(" ")); // ["Some", "random", "string"]

let str1 = "            Some random string          "
console.log(str1.trim()); // Some random string




//Array methods
let arr = [1, 2, 3, 4];
console.log(arr); // [1, 2, 3, 4]

console.log(arr.toString()); // 1,2,3,4

console.log(arr.join(":")); // 1:2:3:4

arr.splice(3, 0, 20, 30, 50);
console.log(arr); // [1, 2, 3, 20, 30, 50, 4]

console.log(arr.slice(4, 6)); //  [30, 50]
console.log(arr); // [1, 2, 3, 20, 30, 50, 4]