function findNb(m) {
    let n = 0;
    let buildingLeft = m;
  
    while(buildingLeft > 0) {
      n++
      buildingLeft -= n**3;
    }
  
    return buildingLeft === 0 ? n : -1;
}
