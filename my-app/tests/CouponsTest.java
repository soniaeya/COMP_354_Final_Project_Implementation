function changeCouponAmountByParameter(customerID, nbOfCoupon) {
    int new_total = customerID.calculateRebate();
    if(new_total === nbOfCoupon+1){
      return true;
    }
    else{
      return false;
    }
}

function sendACoupon(customerID, couponValue) {
  // We kind of dont have anything for this one because we directly recalculate the amount
  // of coupon, but we can keep it here as a test
  return true;
}

function returnNumberOfCoupons(customerID) {
  return customerID.numCoupons;
}
Younes — Today at 8:28 AM
Yo when u said 7 u meant 7pm right ?
kai — Today at 8:41 AM
Customer Test:
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