'use strict';



/*------------------------------*/
/*-----FUCTION DECLARATION: you can call a function declaration before you define it-----*/
/*------------------------------*/
function calAge1(birthYear){
    return 2040-birthYear;
}
const age1= calAge1(1984);


/*------------------------------*/
/*-----FUNCTION EXPRESSION: you can't call a function declaration before you define it-----*/
/*------------------------------*/

const calAge2 = function (birthYear){
    return 2040-birthYear;
}

const age2= calAge2(1984);

console.log(age1, age2);


/*------------------------------*/
/*-----ARROW FUNCTION -----*/
/*------------------------------*/

const calAge3 = birthYear => 2040 - birthYear;
const age3 = calAge3(1984);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age= 2040 - birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1984, 'Carlos'));


/*------------------------------*/
/*-----ARRAY OPERATIONS -----*/
/*------------------------------*/

const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const pushed = friends.push('Mai');
console.log(`the push method returns the new length of the array: ${pushed}`);
console.log(` The length  method: ${friends.length}`);
console.log(friends);

friends.unshift('Lian');
console.log(friends);

//Remove elements
const popped = friends.pop(); //Last
console.log(`the popped element is ${popped}`);
console.log(friends);
friends.shift();// First Element
console.log(friends);

console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Bob')); //-1 index if the person does not exist

console.log(friends.includes('Peter')); 
console.log(friends.includes('Bob')); 

if(friends.includes('Martin')){
    console.log('You have a friend called Peter');    
}else{
    console.log('You dont have a friend called Peter');
}
