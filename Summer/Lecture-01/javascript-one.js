let x = 0; // falsy
x = 1; // truthy

x = true; // truthy
x = false; // falsy

x = "Wekoslav"; // truthy

if (x) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}