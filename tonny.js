////----*****----1.seerToMon -----*****----\\\\
//**1 mon=40 seer or 40 seer=1 mon**\\
function  seerToMon(seer) {
    if(typeof seer=='number'){
        let mon = seer/40 ;
        return mon ;
    }
    else {
       /*<<<<<<<<<<<<<<<<--Error messages-->>>>>>>>>>>>>>>>*/
     const errorCase= 'Enter number type (nuemeric)';
     return errorCase;
    }
}
const result = seerToMon(200) ;//typeOf units always should be positive number because units of measurement never be a negative number\\
console.log(result);



////----*****-----2.totalSales ----*****----\\\\
function totalSales(shirtQuota,pantQuota,shoesQuota) {
    const perShirt = 100;
    const perPant = 200;
    const perShoes = 500;

    if(shirtQuota>=0 && pantQuota>=0 && shoesQuota>=0) {
    const totalShirts = perShirt * shirtQuota;
    const totalPants = perPant * pantQuota;
    const totalShoes = perShoes * shoesQuota;

    const totalAmount = totalShirts + totalPants + totalShoes;
    return totalAmount;
    }
    else{
         /*<<<<<<<<<<<<<<<<--Error messages-->>>>>>>>>>>>>>>>*/
        const errorCase = 'check the value,which sould be positive number typeOf(numeric)';
        return errorCase;
    }
    
}
const fullDress=totalSales(5,5,5);//always used koma(,)between the quota if used (+ - / *)then it showing error\\
console.log(fullDress);



////----*****----3.deliveryCost ----*****----\\\\
function deliveryCost(shirtQuantity){ 
    const fristBill=100;
    const secondBill=80;
    const thirdBill=50;
    if(typeof shirtQuantity =='number'){
    //start conditions \\
         if(shirtQuantity<=100){
             const totalBill=shirtQuantity*fristBill;
             return totalBill;
         }
         else if(shirtQuantity>100 && shirtQuantity<=200){
             const fristOneBill=100*fristBill;
             const remain=shirtQuantity-100;
             const remainig=remain*secondBill;
             const totalBill=fristOneBill+remainig;
             return totalBill;
         }
         else if(shirtQuantity>200){
             const fristOneBill=100*fristBill;
             const secondOneBill=100*secondBill;
             const remain=shirtQuantity-200;
             const remainig=remain*thirdBill;
             const totalBill=fristOneBill+secondOneBill+remainig;
             return totalBill;
         }
    //finish conditions\\
         else{
             console.log('something is wrong,cheack the input')
         }
    }
    else{
         /*<<<<<<<<<<<<<<<<--Error messages-->>>>>>>>>>>>>>>>*/
        let errorCase = "Only using  number typeOf numeric input because it ouput should be number type "
        return errorCase;
    }
}
const daliveredTotalShirt=250;//only use positive number other wise it will be error or undefined\\
const totalAmount=deliveryCost(daliveredTotalShirt);
console.log(totalAmount);




////----*****----4.perfectFriend ----*****----\\\\
function  perfectFriend(friendName){
    if(typeof friendName == 'object'){
        for(let i=0;i<friendName.length;i++){
            if(friendName[i].length==5){
                return friendName[i];
            }
        }
    }
    else{
        /*<<<<<<<<<<<<<<<<--Error messages-->>>>>>>>>>>>>>>>*/
        let error = 'name always a string variable other wise it will be error';
        return error;
    }    
}
const names=['Nodi','Nila','Omi','Tonny','Lucifar','Mohammad Rashid','tomal','promi'];//typeOf name always should be  string('')\\
const nameIs=perfectFriend(names);
console.log(nameIs);    