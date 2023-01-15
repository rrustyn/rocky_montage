function nbYear(p0, percent, aug, p) {
  let years = 0;
  let pCurrent = p0;
    
  while(pCurrent < p) {
//     console.log("the year is ", years, "p is", p, "pCurrent is ", pCurrent)
    pCurrent = Math.floor(pCurrent + (pCurrent * (percent/100)) + aug);
    
    years = ++years;
//     console.log("the year is ", years, "p is", p, "pCurrent is ", pCurrent)
  }
  
  return years;
}
