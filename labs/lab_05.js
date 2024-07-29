const getUserInput = require('../labUtils/inputUtil').getUserInput;

console.log(countWord());

function countWord() {
    let userInput = getUserInput(false, 'Please input a sentence: '),
        wordList = userInput.replace(/[^a-zA-Z0-9 ]/gi, "").split(" "),
        specialCharList = userInput.replace(/[a-zA-Z0-9]/gi, "").split(""),
        mergedList = [...wordList, ...specialCharList],
        tempWord,
        counter,
        countWord = {};

    for (let i = 0; i < mergedList.length; i++) {
        tempWord = mergedList[i];
        counter = 0;
        for (let word of mergedList) {
            if (tempWord === word) {
                counter++;
            }
        }
        countWord[`${tempWord}`] = counter;
    }
    return countWord;
}