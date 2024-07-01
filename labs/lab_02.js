/**
 * import readline-sync library
 * npm init -y
 * npm i readline-sync
 */

let height, weight;
height = getValidationValue('Please input your height (m) ');
printOutNumber(height);
weight = getValidationValue('Please input your weight (kg) ');
printOutNumber(weight);

const BMI = (weight / (height ** 2)).toFixed(1),
    underweight = 18.5,
    overweight = 25,
    obesity = 30;

console.log(`[INFO] Your BMI ${BMI}`);
if (BMI < underweight) {
    console.log(`You're underweight. You should increase ${transformToWeight(BMI, weight, height)} kg!`);
} else if (BMI < overweight) {
    console.log(`You're normal weight. Keep up the good work!`);
} else if (BMI < obesity) {
    console.log(`You're overweight. You should decrease ${transformToWeight(BMI, weight, height)} kg!`);
} else {
    console.log(`You're obesity. You should decrease ${transformToWeight(BMI, weight, height)} kg!`);
};

function getInputValue(message) {
    const readline = require("readline-sync");
    return Number(readline.question(message).trim());
};

function isNumber(value) {
    if (!isNaN(value) && typeof value === 'number' && value != 0) {
        return true;
    } else {
        return false;
    }
};

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

/** 
function transformToWeight(BMI, height) {
    if (BMI < underweight) {
        BMI = underweight - BMI;
    } else {
        BMI = BMI - (overweight - 0.1);
    }
    return (BMI * (height ** 2)).toFixed(1);
};
*/

function transformToWeight(BMI, weight, height) {
    let minWeight = (underweight * (height ** 2));
    let maxWeight = ((overweight - 0.1) * (height ** 2));
    if (BMI < underweight) {
        return (minWeight - weight).toFixed(1);
    } else {
        return (weight - maxWeight).toFixed(1);
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