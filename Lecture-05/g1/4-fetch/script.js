const pageCode = () => {
    document.getElementById("fetch").addEventListener("click", fetchClick);
};

const getPersonId = () => {
    const personId = document.getElementById("person-id").value;
    // todo validate personId
    return personId;
};

const fetchClick = async () => {
    const resultDiv = document.getElementById("result");
    const personId = getPersonId();
    const url = `https://swapi.dev/api/people/${personId}`
    const response = await fetch(url, { 
        method: "GET"
    });

    if (!response.ok) {
        resultDiv.innerHTML = "Something horrible happened";
        return;
    }

    const data = await response.json();
    const output = `${data.name} weights ${data.mass}kg and is ${data.height}cm high`;
    resultDiv.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", pageCode);
