document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("btn");
    const joke = document.getElementById("joke");

    button.addEventListener("click", async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            if (data.categories.includes("explicit")) {
                joke.innerHTML = "DIRTY JOKE!";
            } else {
                joke.innerText = data.value;
            }
        } else {
            joke.innerText = "Not funny, man!";
        }
    });
});