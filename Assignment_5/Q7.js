let num = parseInt(prompt("Please enter a number"));

let isPrime = function(num)
{
    let prime = [];

    if(num == 1)
    {
        prime.push(num);
    }
    else if(num == 2)
    {
        prime.push(1);
        prime.push(num);
    }
    else if(num > 2)
    {
        for(let i = 2; i <= num; i++)
        {
            let checker = true; // Assume number is prime
            for(let j = 2; j <= i-1; j++)
            {
                if((i % j) == 0)
                {
                    checker = false;
                }
            }
            if(checker)
            {
                prime.push(i);
            }
            else
            {
                checker = true;
            }
        }
    }

    return prime;
}

console.log(`For n = ${num}, the result will be ${isPrime(num)}`);