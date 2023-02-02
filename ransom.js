/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

  if (ransomNote.length > magazine.length) return false;

  const ransomCounts = freqCounter(ransomNote);
  const magCounts = freqCounter(magazine);

  for (let letter in ransomCounts) {
    if (!(letter in magCounts)) return false;
    if (ransomCounts[letter] > magCounts[letter]) {
      return false;
    }
  }

  return true;

};

function freqCounter(iterable) {
  const counts = {};
  for (let item of iterable) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}