// DESCRIPTION:
//    Complete the square sum function so that it squares each number passed into it and then sums the results together.


// SOLUTION:
function squareSum(numbers){
    let massive = [];
    for(let i = 0; i < numbers.length; i++) {
        const double = numbers[i] * numbers[i];
        massive.push(double);
    }
    let sum = 0;
    for(let n = 0; n < massive.length; n++) {
        sum = sum + massive[n];
    }
    return sum;
}

console.log("squareSum: ", squareSum(1, 2, 3))