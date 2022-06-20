const defin={
    "PENNY": .01,
     "NICKEL": .05,
     "DIME": .10,
     "QUARTER": .25,
     "ONE": 1.00,
     "FIVE": 5.00,
     "TEN": 10.00,
     "TWENTY": 20.00,
     "ONE HUNDRED": 100.00
   }
   function checkCashRegister(price, cash, cid) {
     let change=(cash-price).toFixed(2);
     let totalcid=0;
     let leftamount=[];
     for(let ele of cid)
     {
     totalcid+=ele[1];
     }
     if(totalcid<change)
     {
         return {status: "INSUFFICIENT_FUNDS", change: leftamount};
     }
     else if(totalcid==change)
     {
        return {status: "CLOSED", change:cid}
     }
     else
     {
         cid=cid.reverse();
         for(let ele of cid)
         {    let temp=[ele[0],0];
             while(change>=defin[ele[0]] && ele[1]>0)
             {
                   temp[1]+=defin[ele[0]];
                   ele[1]-=defin[ele[0]];
                   change-=defin[ele[0]];
                   change=change.toFixed(2);
             }
        if (temp[1] > 0) {
           leftamount.push(temp);
         }
       }
     }
     if (change > 0) {
       return { status: "INSUFFICIENT_FUNDS", change: [] };
     }
     return { status: "OPEN", change: leftamount};
   }
   
   
   
   console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));