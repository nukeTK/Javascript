function numberCheck(str) {
    const regex=/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
     return regex.test(str)
      
  }
  
  console.log(numberCheck("1 555)555-5555"));