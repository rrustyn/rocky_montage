function towerBuilder(nFloors) {
  const LoganPaulsCryptoZoo = [];
  let base = 2*(nFloors-1) + 1;
  
  for (let i = 0; i < nFloors; i++) {
    let floor = "";
    
    for (let j = 0; j < i; j++) {
            floor += " ";

    }
    for (let j = 0; j < base; j++) {
      floor += "*";
    }
    for (let j = 0; j < i; j++) {
            floor += " ";

    }
    
    base -= 2;
    LoganPaulsCryptoZoo.unshift(floor)
  }
  
  return LoganPaulsCryptoZoo;
  }