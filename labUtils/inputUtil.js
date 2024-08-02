
const readline = require("readline-sync");

function getValidationValue(message) {
    let flag = false,
        inputValue;

    while (!flag) {
        inputValue = getInputValue(message);
        if (isNumber(inputValue)) {
            return inputValue;
        } else {
            console.error(`\n[ERROR] Invalid value. Please input valid values: \n1. Number \n2. Not blank \n3. Greater than or equal 0`);
        }
    }
};

function getInputValue(message) {
    return Number(readline.question(message).trim());
};

function getRawInputValue(message) {
    return readline.question(message).trim();
};

function isNumber(value) {
    if (!isNaN(value) && typeof value === 'number' && value >= 0) {
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
        console.error(`[ERROR] This is not the number`);
    }
};

function getUserInput(isNumber, message) {
    if (isNumber) {
        return getValidationValue(message);
    } else {
        return getRawInputValue(message);
    }
};

module.exports = { getValidationValue, printOutNumber, getInputValue, getRawInputValue, getUserInput };