const fetchBtn = document.getElementById('fetch');


// fetchBtn.addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1', {

//     }).then((response) => {
//         console.log(response);
//         return response.text();
//     }).then((data) => {
//         document.getElementById('result').innerHTML = data;
//     }).catch((error) => {
//         console.error("Error:" + error);
//     });
// });


fetchBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
        const data = await response.text();
        document.getElementById('result').innerHTML = data;
    } catch(error) {
        console.error("Error:" + error);
    };
});


