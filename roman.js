const intToRoman = (num) => {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
    
    for (key in map) {  
      const repeatCounter = Math.floor(num / map[key]);//if its completely divisible repeatcounter become 1 and it goes to result
    
      
      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter) //number of time key repeat its in repeatcounter
      
      }
      
      num %= map[key];//whether num is zero or not and also put remaining value that will n check for roman
        if (num === 0) return result;
    }
    
    return result;
  };
  console.log(intToRoman(4))