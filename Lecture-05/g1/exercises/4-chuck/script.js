const pageCode = () => {
    document.getElementById("fetch").addEventListener("click", fetchClick);
};

const fetchClick = async () => {
    const resultDiv = document.getElementById("result");  
    const joke = await getJoke();
    resultDiv.innerHTML = joke;
};

const getJoke = async () => {
    const url = `https://api.chucknorris.io/jokes/random`;
    const response = await fetch(url, { 
        method: "GET"
    });

    if (!response.ok) {
        return "Something horrible happened";
    }

    const data = await response.json();
    if (data.categories.includes("explicit")) {
        console.log("This joke is dirty, getting another one...");
        return getJoke();
    }
    const output = `${data.value}`;
    return output;
}

// const fetchClick = async () => {
//     const resultDiv = document.getElementById("result");
//     const url = `https://api.chucknorris.io/jokes/random`;
//     const response = await fetch(url, { 
//         method: "GET"
//     });

//     if (!response.ok) {
//         resultDiv.innerHTML = "Something horrible happened";
//         return;
//     }

//     const data = await response.json();
//     if (data.categories.includes("explicit")) {
//         resultDiv.innerHTML = "This joke is explicit";
//         return;
//     }
//     const output = `${data.value}`;
//     console.log(data.categories);
//     resultDiv.innerHTML = output;
// };

document.addEventListener("DOMContentLoaded", pageCode);