function calculateCumulativeExpense(customerID) {
  return customerID.calculateBasketTotal;
}

function sendAcouponBasedOnExpense(customerID) {
  let cumulativeExpense = 0;
  let newCoupons = 0;
  let Coupons = customerID.numCoupons
  if(customerID.totalPrice > 100){
      newCoupons = customerID.calculateRebate;
  }
  else{
    return("it doesnt matter");
  }
  if(cumulativeExpnse == newCoupons){
    return false;
  }
  else{
    return true;
  }
}

function runTests() {
  let customerID = 11;
  console.log(calculateCumulativeExpense(customerID));

  console.log(sendAcouponBasedOnExpense(customerID));

// Run the tests
runTests();