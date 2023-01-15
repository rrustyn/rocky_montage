function digitize(n) {
  const digits = [];
  let nString = n.toString();
  
  for (let digit of nString) {
    digits.unshift(parseInt(digit));
  }
  
  return digits;
}