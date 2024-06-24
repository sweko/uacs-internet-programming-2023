function makeItWork() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', function() {
        const one = document.getElementById('one').textContent;
        const two = document.getElementById('two').textContent;
        const result = document.querySelector('div.container p');
        result.textContent = `The result is: ${one} and ${two}`;
    });

    const b2 = document.createElement('button');
    b2.textContent = 'Click me';
    b2.addEventListener('click', function() {
        console.log('You clicked me');
    });

    document.body.appendChild(b2);
};

document.addEventListener('DOMContentLoaded', makeItWork);

// makeItWork();