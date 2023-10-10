function handleTheTruth(value) {
    if (value) {
        console.log(`${value} - It's true!`);
    } else {
        console.log(`${value} - It's false!`);
    }
}
// boolean
const trueValue = true;
handleTheTruth(trueValue);

const falseValue = false;
handleTheTruth(falseValue);

// numbers
const zeroValue = 0;
handleTheTruth(zeroValue);

const oneValue = 1;
handleTheTruth(oneValue);

const nanValue = NaN;
handleTheTruth(nanValue);

// strings
const emptyStringValue = '';
handleTheTruth(emptyStringValue);

const nonEmptyStringValue = 'Hello';
handleTheTruth(nonEmptyStringValue);

const zeroStringValue = '0';
handleTheTruth(zeroStringValue);

// null
const nullValue = null;
handleTheTruth(nullValue);

// undefined
const undefinedValue = undefined;
handleTheTruth(undefinedValue);

// objects
const emptyObjectValue = {};
handleTheTruth(emptyObjectValue);

const nonEmptyObjectValue = { name: 'John' };
handleTheTruth(nonEmptyObjectValue);

// arrays
const emptyArrayValue = [];
handleTheTruth(emptyArrayValue);

const nonEmptyArrayValue = [1, 2, 3];
handleTheTruth(nonEmptyArrayValue);


!!nonEmptyObjectValue ? console.log('true') : console.log('false');