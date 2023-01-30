/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanStr = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    console.log(cleanStr)
    let cleanStrRev = [...cleanStr].reverse().join("");

    return cleanStr === cleanStrRev
};