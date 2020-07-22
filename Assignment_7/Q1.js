let b_color = ["red", "yellow", "white", "orange", "blue", "green", "black"];

// console.log(Math.floor(Math.random() * b_color.length));

let setColor = () => {
    let index = Math.floor(Math.random() * b_color.length);

    document.body.style.backgroundColor = b_color[index];
}

setInterval(setColor, 5000); 