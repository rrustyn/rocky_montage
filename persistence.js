function persistence(num) {
   let numstr = num.toString();
   let persistence = 0;
    
   while (numstr.length > 1) {
     const step = numstr.split("").map(Number);
     numstr = step.reduce((total,current) => total*current).toString();
     persistence++;
   }
  
   return persistence
}