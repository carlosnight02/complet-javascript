const billvalue = 40;
let tip = (billvalue >= 50) && (billvalue <= 300) ? billvalue * 0.15 : billvalue * 0.2; 
console.log(`The was ${billvalue}, the tip was ${tip} and the total was ${billvalue + tip}`);