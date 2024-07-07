const inputUtil = require('../labUtils/inputUtil');
const getValidationValue = inputUtil.getValidationValue;
const printOutNumber = inputUtil.printOutNumber;


// lab 3.1
const firstList = collectNumbers();
console.log(`Fist list \[${firstList}\]`);
showTypeOfNumbersInTheList(firstList);
// lab 3.2
const maxNumber = getMaxNumberInTheList(firstList);
console.log(`Max number in the list \[${firstList.toString()}\] is ${maxNumber}`);
// lab 3.3
const sortedList = sortTheList(firstList);
console.log(`Sorted list \[${sortedList.toString()}\]`);
// lab 3.4
const secondList = collectNumbers();
console.log(`Second list \[${secondList}\]`);

const thirdList = sortedList.concat(secondList);
console.log(`Third list \[${thirdList}\]`);
const thirdListIsSorted = sortTheList(thirdList)
console.log(`Third list is sorted \[${thirdListIsSorted}\]`);

// get the quantity of numbers
function getQuantityOfNumbers() {
    let quantity = getValidationValue(`How many numbers do you want to input: `)
    return quantity;
};

// collect numbers
function collectNumbers() {
    const quantity = getQuantityOfNumbers();
    console.log(`Let input ${quantity} numbers`);
    const arrList = [];
    for (let i = 0; i < quantity; i++) {
        let number = getValidationValue(`Input number ${i + 1}/${quantity}: `);
        arrList.push(number);
    }
    return arrList;
};

// get even/odd numbers
function showTypeOfNumbersInTheList(arrList) {
    const evenNumbers = [];
    const oddNumbers = [];
    for (let i in arrList) {
        let result = arrList[i] % 2;
        if (result === 0) {
            evenNumbers.push(arrList[i]);
        } else {
            oddNumbers.push(arrList[i]);
        }
    }
    console.log(`Even numbers in the list are ${evenNumbers.length}: \[${evenNumbers.toString()}\]`);
    console.log(`Odd numbers in the list are ${oddNumbers.length}: \[${oddNumbers.toString()}\]`);
};

// get maxNumber in the list
// #1
// function getMaxNumberInTheList(arrList) {
//     return Math.max(...arrList);
// }
// #2
function getMaxNumberInTheList(arrList) {
    let maxNumber = Number(arrList[0]),
    nextNumber;
    for (let i = 1; i < arrList.length; i++) {
        nextNumber = Number(arrList[i]);
        if (maxNumber > nextNumber) {
            maxNumber;
        } else if (maxNumber === nextNumber || maxNumber < nextNumber) {
            maxNumber = nextNumber;
        }
    }
    return maxNumber;
}

// sort the list
function sortTheList(arrList) {
    const newList = [];
    while (arrList.length > 0) {
        let maxNumber = getMaxNumberInTheList(arrList)
        arrList.splice(arrList.indexOf(maxNumber), 1);
        newList.unshift(maxNumber);
    }
    return newList;
};