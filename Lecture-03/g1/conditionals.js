const boolean = true;
willItBlend(boolean);
const boolean2 = false;
willItBlend(boolean2);

const zero = 0;
willItBlend(zero);
const one = 1;
willItBlend(one);
const notanumber = Number.NaN;
willItBlend(notanumber);

const emptyString = "";
willItBlend(emptyString);
const string = "string";
willItBlend(string);
const zeroString = "0";
willItBlend(zeroString);

const nullValue = null;
willItBlend(nullValue);
const undefinedValue = undefined;
willItBlend(undefinedValue);

const emptyArray = [];
willItBlend(emptyArray);
const array = [1, 2, 3];
willItBlend(array);

const emptyObject = {};
willItBlend(emptyObject);
const object = { a: 1, b: 2 };
willItBlend(object);

function willItBlend(value) {
    if (value) {
        console.log(`This value: ${value} is true`);
    } else {
        console.log(`This value: ${value} is false`);
    }
}

function isItDefined(value) {
    if (value !== undefined) {
        console.log(`This value: ${value} is defined`);
    } else {
        console.log(`This value: ${value} is not defined`);
    }
}

let xx = 1;

!!xx ? console.log("true") : console.log("false");