/**
 * @param {string} s
 * @return {number}
 */

 //find the longest consecutive string w/ unique characters
 //if first character must be unique;
 //append next character if it isn't contained in substring 
 //         inc length plus one and add char to set
 //if next character in set, reset set, check if length is most seen, reset length and set
var lengthOfLongestSubstring = function(s) {
    
    let maxLength = 0;
    let currLength = 0;
    let subSContains = new Set();

    let l = 0;
    let r = 0;

    while (r < s.length) {
        if (subSContains.has(s[r])) {
            subSContains.delete(s[l])
            l++;
        } else {
            subSContains.add(s[r]);
            r++;
        }
        currLength = r - l;
        maxLength = currLength > maxLength ? currLength : maxLength;
    }

    return maxLength;
};