function rowSumOddNumbers(n) {
  let sum = 0;
  let sequenceStart = 0;
  
  for(let i = 0; i < n; i++) {
    sequenceStart += i;
  }
  
	for(let i = 0; i < n; i++) {
    sum += 2*(sequenceStart + i) + 1;
  }
  
  return sum;
}

// 1 0 (n - 1)
// 2 1 2 (n - 1)
// 3 3 4 5 (n)
// 4 6 7 8 9 (n + 2)
// 5 10 11 12 13 14 (n+5)
// 6 15 16 17 18 19 20 (n+9)
// 7 21 22 23 24 25 26 27 (n + 14)
// 8 28 29 30 31 32 33 34 35 (n + 20)
//
//
//
//
//
//