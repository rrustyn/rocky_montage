function removeSmallest(numbers) {
  let lowest = numbers[0];
  let indexOfLowest = 0;
  const newExhibition = Array.from(numbers);
  
  for (let number of numbers) {
    //console.log("the number is ", number)
    if (number < lowest) {
      lowest = number;
    }
    //console.log("lowest is: ", lowest)
  }
  
  indexOfLowest = numbers.indexOf(lowest);
  //console.log("index of lowest: ", indexOfLowest, "value at lowest :", lowest)
  newExhibition.splice(indexOfLowest,1);  
  
  return newExhibition
  
}