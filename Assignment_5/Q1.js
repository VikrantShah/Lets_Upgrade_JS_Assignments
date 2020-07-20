for(let i = 1; i <= 100; i++)
{
    if(((i % 3) == 0) && ((i % 5) == 0))
    {
        console.log(`The value of i is ${i} : fizzbuzz`);
    }
    else if((i % 3) == 0)
    {
        console.log(`The value of i is ${i} : fizz`);
    }
    else if((i % 5) == 0)
    {
        console.log(`The value of i is ${i} : buzz`);
    }
    else
    {
        console.log(`The value of i is ${i}`)
    }
}