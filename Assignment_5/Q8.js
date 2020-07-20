let ask = (question, yes, no) => {
    if(confirm(question))
    {
        yes();
    }
    else
    {
        no();
    }
}

ask(
    "Do you agree?",

    () => {
        alert("You agreed.");
    },

    () => {
        alert("You cancelled the execution.");
    }
);