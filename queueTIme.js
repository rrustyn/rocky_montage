function queueTime(customers, n) {
  const custQueue = customers;
  const tills = Array.from({length: n}).fill(0);
  
  while (custQueue.length !== 0) {
    tills.sort((a,b) => a-b);
    tills[0] += custQueue.shift();
  }
  
  return Math.max(...tills)
}