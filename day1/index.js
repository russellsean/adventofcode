
// Import required modules
const fs = require('fs');

// Read input file
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// Solve the puzzle
function solvePuzzle(input) {
    // Initialize variables
    let sum = 0;
    let textNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    // Loop through each line of the input
    for (let i = 0; i < input.length; i++) {
        let line = input[i].toLowerCase();
        // Use a regular expression to match all occurrences of textNumbers
        let textNumbers = line.match(/twone|sevenine|oneight|threeight|nineight|fiveight|eighthree|eightwo|one|two|three|four|five|six|seven|eight|nine|[0-9]/g);
        
        //convert textNumbers to numbers
        let numbers = textNumbers.flatMap(function (num) {
            if (isNaN(num)) {
                //catch edge cases twone, sevenine, oneight, threeight, nineight, fiveight, eighthree, eightwo
                if (num === 'twone') {
                    return [2, 1]
                } else if (num === 'sevenine') {
                    return [7, 9]
                } else if (num === 'oneight') {
                    return [1, 8]
                } else if (num === 'threeight') {
                    return [3, 8]
                } else if (num === 'nineight') {
                    return [9, 8]
                } else if (num === 'fiveight') {
                    return [5, 8]
                } else if (num === 'eighthree') {
                    return [8, 3]
                } else if (num === 'eightwo') {
                    return [8, 2]
                } else {
                    //convert textNumbers to numbers
                    return textNumber.indexOf(num);
                }
            } else {
                return parseInt(num);
            }
        });

        //concatenate the numbers
        let concatNum = parseInt(numbers[0] + '' + numbers[numbers.length - 1]);
        console.log(line, textNumbers, numbers, concatNum)
        sum += concatNum;
    }
    
    return sum;
}

// Call the solvePuzzle function with the input
const answer = solvePuzzle(input);
console.log(answer);
