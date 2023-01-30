/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
    return false;
  }

  let frequencyCounterS = frequencyCounter(s);
  let frequencyCounterT = frequencyCounter(t);

  for (let key in frequencyCounterS) {
    if (!(key in frequencyCounterT)) {
      return false;
    }

    if (frequencyCounterS[key] !== frequencyCounterT[key]) {
      return false;
    }
  }

  return true;
};

function frequencyCounter(iterable) {
  const counts = {};
  for (let item of iterable) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}