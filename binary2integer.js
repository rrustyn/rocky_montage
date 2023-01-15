const binaryArrayToNumber = arr => {
  let integer = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      integer += 2**(arr.length - i - 1);
    }
  }
  
  return integer;
};