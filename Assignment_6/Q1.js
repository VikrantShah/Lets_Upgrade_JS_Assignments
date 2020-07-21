let num = parseInt(prompt("Plaese enter a number"))

if(num >= 0)
{
    console.log(`Entered number is ${num}`);

    let numArr = [];
    for(let i = 0; i <= num; i++)
    {
        numArr.push(i);
    }
    console.log(`Array of numbers : ${numArr}`);

    let odd = numArr.filter(element => (element % 2) != 0);
    console.log(`Odd Numbers : ${odd}`);

    let oddCube = odd.map(element => element ** 3);
    console.log(`Cube of Odd Numbers : ${oddCube}`);
}
else
{
    console.log("Please enter a positive number");
}