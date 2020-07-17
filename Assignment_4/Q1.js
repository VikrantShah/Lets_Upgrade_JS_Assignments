// Getting the number
let num = prompt("Please enter a number");

let evenOdd = function(num) {
    num = parseInt(num);

    let classify = (num % 2) == 0 ? "even" : "odd";
    return classify;
}

let classify = evenOdd(num);

console.log(`The number entered is ${num} and Number is ${classify}`);