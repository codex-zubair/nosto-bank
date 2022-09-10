// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {


  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;
  if(parseFloat(newDepositAmount) < 0)
  {
    alert("Only valid Number!");
  }
  else
  {
    if (isNaN(newDepositAmount)) {
      alert("Only Valid Number!");
      document.getElementById("deposit-field").value = ``;
    }
  
    else {
  
      /* 
          1. get previous deposit total by id
      
          */
  
  
      const previousDepositTotal = document.getElementById("balance-total").innerText;
  
  
  
  
  
  
      // calculate new deposit total
      const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  
  
  
  
  
      // set deposit total value
      document.getElementById("deposit-total").innerText = newDepositAmount;
  
  
      // get previous balance by using the function
  
  
      document.getElementById("balance-total").innerText = newDepositTotal;
      document.getElementById("deposit-field").value = ``;
  
  
    }
  }

});






