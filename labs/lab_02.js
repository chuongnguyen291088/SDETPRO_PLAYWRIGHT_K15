/**
 * import readline-sync library
 * npm init -y
 * npm i readline-sync
 */

const readline = require("readline-sync");
let height, weight;
height = Number(readline.question('Please input your heigh (m)  '));
printOutNumber(height);
weight = Number(readline.question('Please input your weight (kg)  '));
printOutNumber(weight);

const BMI = (weight / (height * 2)).toFixed(1);
underweight = 18.5
overweight = 25
obesity = 30;

console.log(`[INFO] Your BMI ${BMI}`);
if (BMI < underweight) {
    console.log(`You're underweight. You should increase the weight!`);
} else if (BMI < overweight) {
    console.log(`You're normal weight. Keep up the good work!`);
} else if (BMI < obesity) {
    console.log(`You're overweight. You should decrease the weight!`);
} else {
    console.log(`You're obesity. You should decrease the weight!`);
};

function printOutNumber(number) {
    const result = number % 2;
    if (result !== 0) {
        console.log(`[INFO] This is the odd number`);
    } else {
        console.log(`[INFO] This is the even number`);
    };
};