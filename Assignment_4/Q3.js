// Getting the marks
let marks = parseInt(prompt("Plaese enter your marks"));

// Generating grade using "if" statement
console.log(`Generating grade using "if" statement,`);
if(marks >= 0 && marks <= 40)
{
    console.log(`Marks are ${marks} and grade is F`);
}
else if(marks >= 41 && marks <= 50)
{
    console.log(`Marks are ${marks} and grade is D`);
}
else if(marks >= 51 && marks <= 55)
{
    console.log(`Marks are ${marks} and grade is C`);
}
else if(marks >= 55 && marks <= 65)
{
    console.log(`Marks are ${marks} and grade is C+`);
}
else if(marks >= 65 && marks <= 75)
{
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks >= 75 && marks <= 80)
{
    console.log(`Marks are ${marks} and grade is B+`);
}
else if(marks >= 80 && marks <= 100)
{
    console.log(`Marks are ${marks} and grade is A`);
}
else
{
    console.error("INVALID INPUT");
}

console.log(" ");

// Generating grade using "switch case"
console.log(`Generating grade using "switch case",`)
switch(true)
{
    case (marks >= 0 && marks <= 40) :
        console.log(`Marks are ${marks} and grade is F`);
        break;

    case (marks >= 41 && marks <= 50) :
        console.log(`Marks are ${marks} and grade is D`);
        break;

    case (marks >= 51 && marks <= 55) :
        console.log(`Marks are ${marks} and grade is C`);
        break;

    case (marks >= 55 && marks <= 65) :
        console.log(`Marks are ${marks} and grade is C+`);
        break;

    case (marks >= 65 && marks <= 75) :
        console.log(`Marks are ${marks} and grade is B`);
        break;

    case (marks >= 75 && marks <= 80) :
        console.log(`Marks are ${marks} and grade is B+`);
        break;

    case (marks >= 80 && marks <= 100) :
        console.log(`Marks are ${marks} and grade is A`);
        break;
        
    default :
        console.error("INVALID INPUT");
}

console.log(" ");

// Generating grade using "ternary" operator
console.log(`Generating grade using "ternary operator",`)
let stmt = (marks >= 0 && marks <= 40) ? `Marks are ${marks} and grade is F` : 
(marks >= 41 && marks <= 50) ? `Marks are ${marks} and grade is D` :
(marks >= 51 && marks <= 55) ? `Marks are ${marks} and grade is C` :
(marks >= 55 && marks <= 65) ? `Marks are ${marks} and grade is C+` :
(marks >= 65 && marks <= 75) ? `Marks are ${marks} and grade is B` :
(marks >= 75 && marks <= 80) ? `Marks are ${marks} and grade is B+` :
(marks >= 80 && marks <= 100) ? `Marks are ${marks} and grade is A` :
"INVALID INPUT";

console.log(stmt);