// 🐱‍👤DESCRIPTION
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// 🐱‍💻TESTS
// doTest("test", "es");
// doTest("testing", "t");
// doTest("middle", "dd");
// doTest("A", "A");

// 🍀SOLUTION
function getMiddle(s) {
    let resultString = ''
    if (s.length%2 === 0) {
        resultString = s[s.length/2-1] + s[s.length/2]
    }
    else {
        resultString = s[Math.floor(s.length/2)]
    }
    return resultString;
}