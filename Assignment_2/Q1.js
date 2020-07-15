// Example of console.clear()
console.clear()

// Example of console.log()
console.log(1234);
console.log("Some string");
console.log([0, 1, 2]);
console.log({1 : "xyz", 2 : "abc"});

// Example of console.error()
console.error("Some random error");

// Example of console.warn()
console.warn("Some warning");

/// Example of console.time() and console.timeEnd()
console.time();
let func = function()
{
    console.log("Function Running");
}
func();
console.timeEnd();

// Example of console.table()
console.table({1 : "xyz", 2 : "abc"});

// Example for console.count()
for(i = 0; i<=3; i++)
{
    console.count();
}
// With some label
for(i = 0; i<=3; i++)
{
    console.count("Some Label");
}

// Example for console.group() and console.groupEnd()
console.group("Group");
console.log(1234);
console.log("Some string");
console.log([0, 1, 2]);
console.log({1 : "xyz", 2 : "abc"});
console.groupEnd("Group");