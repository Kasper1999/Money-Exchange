// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var j=0;
    var h,q,d,n,p;
    var objectA = {};
    if(currency <= 0) return (objectA);
    var error = {
        error:"You are rich, my friend! We don't have so much coins for exchange"
      };
    if(currency > 10000) return error;
    for(currency;currency >= 50;){
        currency-=50;
        j++;
    }
    h=j;
    j=0;
    for(currency;currency >= 25;){
        currency-=25;
        j++;
    } 
    q=j;
    j=0;
    for(currency;currency >= 10;){
        currency-=10;
        j++;
    }
    d=j;
    j=0;
    for(currency;currency >= 5;){
        currency-=5;
        j++;
    }
    n=j;
    j=0;
    for(currency;currency >= 1;){
    currency-=1;
    j++;
    }
    p=j;

    var money = {
        H:h,
        Q:q,
        D:d,
        N:n,
        P:p
      };

      for (var key in money) {
        if(money[key]==0) delete money[key];
      }

    return money;
}
