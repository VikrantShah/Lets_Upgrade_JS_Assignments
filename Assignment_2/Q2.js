// var section
console.log(declare); // Undefined
var declare;

function getCount()
{
    var count;
    for(var i = 0; i < 10; i++)
    {
        var c = i;
        count = i - 1;
    }

    console.log(i);
    console.log(c);
    console.log(count);
}
getCount();
//console.log(count); // Reference Error





// let section
//console.log(declar); // Reference Error
//let declar;

function getCount()
{
    let count;
    for(let i = 0; i < 10; i++)
    {
        let c = i;
        count = i - 1;
    }

    // console.log(i); // Reference Error
    // console.log(c); // Reference Error
    console.log(count);
}
getCount();
// console.log(count); // Reference Error

let pie = 3.14;
pie = 22 / 7;




// const section
//const pi = 3.14;
//pi = 22 / 7; // Type Error