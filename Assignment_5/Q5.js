let sales = parseInt(prompt("Please enter the total sales mode by you"))

console.log(`Sales made by you : ${sales}`);

if(sales >= 0 && sales <= 5000)
{
    console.log(`Commision earned by you is ${sales * 0.02}`);
}
else if(sales >= 5001 && sales <= 10000)
{
    console.log(`Commision earned by you is ${sales * (0.05 + 0.02)}`);
}
else if(sales >= 10001 && sales <= 20000)
{
    console.log(`Commision earned by you is ${sales * (0.07 + 0.05 + 0.02)}`);
}
else if(sales > 20000)
{
    console.log(`Commision earned by you is ${sales * (0.1 + 0.07 + 0.05 + 0.02)}`);
}
else
{
    console.log("INVALID INPUT");
}