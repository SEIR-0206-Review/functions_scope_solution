// 1.1. What is the difference between a parameter and an argument?
// https://developer.mozilla.org/en-US/docs/Glossary/Parameter
// https://developer.mozilla.org/en-US/docs/Glossary/Argument
// 1.2. Within a function, what is the difference between return and console.log?
// Console.log will display the parameter in the console. Return statement will stop executing of the function and return the specified value (not into the console).
// 1. 3. What are the implications of the ability of a function to return a value?
// It implies we can create a reusable tool that helps developers break larger problems in to smaller steps. Without a return the function we will always have a value of undefined. And when we add function to a variable, that becomes really important to assign values to the return of the function
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num * num * num;
}
// console.log(calculateCube(2));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];

    for(let i = 0; i < vowels.length; i++) {
        if(letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

// console.log(isAVowel("b"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return [word1.length, word2.length];

}
// console.log(getTwoLengths("fun", "Beer"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// console.log(sumArray([1,2,3,4,5,6]));


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if(num < 2) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(139));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for(let i = 2; i <= num; i++) {
        if(checkPrime(i) === true) {
            console.log(i);
        }
    }
}
// console.log(printPrimes(100));

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
console.log(printLongestWord(["hello", "hi", "greetings"]));
// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};