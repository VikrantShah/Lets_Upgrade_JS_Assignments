let jsonObject = [];

let url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


async function completedToDos()
{
    const response = await fetch(url);

    let data = await response.json();

    console.log(data);

    for(let i = 0; i < 200; i++)
    {
        jsonObject = JSON.stringify(data[i]);
        
        if(jsonObject.includes("true"))
        {
            console.log(jsonObject);
        }
    }
    
}

completedToDos();
// let str = jsonOject.forEach(element => {
//     JSON.stringify(element);
// }); 

// let data = JSON.stringify(jsonObject);
// console.log(data)
// console.log(str);