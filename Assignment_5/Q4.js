let option = parseInt(prompt("Please enter your choice of operation\n    1 : Addition\n    2 : Subtraction\n    3 : Multiplication\n    4 : Division\n    5 : Square Root\n    6 : Percentage\n    7 : Quit"));

if(Number.isNaN(option) || option == 7)
{
    console.log("You have exited.");
}
else
{
    let num1 = parseInt(prompt("Please enter the 1st number"));

    let num2 = parseInt(prompt("Please enter the second number"));

    if(Number.isNaN(num1) && Number.isNaN(num2))
    {
        console.log("You have exited.")
    }
    else
    {
        switch(option)
        {
            case 1 :
                console.log(`The result of addition is ${num1 + num2}`);
                break;
            case 2 :
                console.log(`The result of subtraction is ${num1 - num2}`);
                break;
            case 3 :
                console.log(`The result of multiplication is ${num1 * num2}`);
                break;
            case 4 :
                if(num2 == 0)
                {
                    console.log("Cannot divide a number by 0.")
                }
                else
                {
                    console.log(`The result of addition is ${num1 / num2}`);
                }
                break;
            case 5 :
                console.log(`The square root is ${Math.sqrt(num1, num2)}`);
                break;
            case 6 :
                console.log(`The percentage is ${num1 * (num2 / 100)}`);
                break;
            default :
                console.log("INVALID CHOICE");
        }
    }
}
