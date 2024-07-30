// DESCRIPTION:
//     Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.

// SOLUTION:

function findAverage(array) {
    if (array.length < 1) {
        return 0;
    }

    let average = 0;
    for(let i = 0; i < array.length; i++) {
        average += array[i];
    }
    average = average / array.length;
    return average;
}

console.log("findAverage: ", findAverage(1,1,1))