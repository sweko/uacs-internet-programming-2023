function makeItWork() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', function() {
        const one = document.getElementById('one').textContent;
        const two = document.getElementById('two').textContent;
        const result = document.querySelector('div.container p');
        result.textContent = `The result is: ${one} and ${two}`;
    });
};

document.addEventListener('DOMContentLoaded', makeItWork);