function getValidationValue(message) {
    let flag = false,
        inputValue;

    while (!flag) {
        inputValue = getInputValue(message);
        if (isNumber(inputValue)) {
            return inputValue;
        } else {
            console.log(`Invalid value. Please input valid values: \n.Number \n.Not blank \n.Not equal 0`);
        }
    }
};

function getInputValue(message) {
    const readline = require("readline-sync");
    return Number(readline.question(message).trim());
};

function getRawInputValue(message) {
    const readline = require("readline-sync");
    return readline.question(message).trim();
};

function isNumber(value) {
    if (!isNaN(value) && typeof value === 'number' && value != 0) {
        return true;
    } else {
        return false;
    }
};

function printOutNumber(number) {
    if (isNumber(number)) {
        const result = number % 2;
        if (result !== 0) {
            console.log(`[INFO] This is the odd number`);
        } else {
            console.log(`[INFO] This is the even number`);
        };
    } else {
        console.log(`[INFO] This is not the number`);
    }
};

 module.exports = {getValidationValue, printOutNumber, getInputValue, getRawInputValue};