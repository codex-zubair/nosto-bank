// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {


  console.log('working');
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;
  /* 
    1. get previous deposit total by id

    */


  const previousDepositTotal = document.getElementById("balance-total").innerText;

  // console.log(previousDepositTotal);




  // calculate new deposit total
  const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);





  // set deposit total value
  document.getElementById("deposit-total").innerText = newDepositAmount;


  // get previous balance by using the function

  console.log(newDepositTotal);

  Document.getElementById("balance-total");
});

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/codingwithrock/nosto-bank.git
git push -u origin main




