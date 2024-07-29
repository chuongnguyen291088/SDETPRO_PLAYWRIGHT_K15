const isEvenNumber = function (value) {
    return value % 2 === 0;
};

const isOddNumber = function (value) {
    return value % 2 !== 0;
};

const convertToEvenNumber = function (value) {
    if (isEvenNumber(value)) {
        return value;
    } else {
        return value + 1;
    }
}

const sortASC = function (firstNum, secondNum) {
    return firstNum - secondNum;
}

const sortDESC = function (firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    getEvenNumber: isEvenNumber,
    getOddNumber: isOddNumber,
    convertToEvenNumber,
    sortASC,
    sortDESC,
};
