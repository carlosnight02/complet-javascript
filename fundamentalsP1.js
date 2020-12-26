/*****************************************************************************/
/*************************FUNDAMENTALS-PART 1*********************************/
/*****************************************************************************/


/*---------------------------*/
/*-----EQUALITY OPERATORS-----*/
/*---------------------------*/

const age = '18';
if (age === 18) console.log(`Strict`);
if (age == 18) console.log(`Loose`);

const favourite = Number(prompt("What's your favourite number?"));

console.log(`your favourite number is: ${favourite}`);
console.log(`its type is: ${typeof favourite}`);

const numberCarlos = 21;
const numberGeidy = 27;

if (favourite === numberCarlos) {
    console.log(`Cool! ${favourite} is an amazing number`);
} else if (favourite === numberGeidy) {
    console.log(`${favourite} is also a cool number`);
} else {
    console.log(`${favourite} is a shit`);
}

if (favourite !== numberCarlos && favourite !== numberGeidy) {
    console.log(`Why not ${numberCarlos} or  ${numberGeidy}`);
}


/*---------------------------*/
/*-----LOGICAL OPERATORS-----*/
/*---------------------------*/

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Carlos is able to drive`);
} else {
    console.log(`Someone else should drive`);
}


/*------------------------------*/
/*-----THE SWITCH STATEMENT-----*/
/*------------------------------*/

const day = 'sunday';

switch (day) {
    case 'moday':
        console.log(`today is ${day} let's learn`);
        break;

    case 'tuesday':
        console.log(`today is ${day} let's learn`);
        break;
    case 'wednesday':
        console.log(`today is ${day} let's learn`);
        break;
    case 'thursday':
        console.log(`today is ${day} let's learn`);
        break;
    case 'friday':
        console.log(`today is ${day} let's learn`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`today is ${day} let's learn`);
        break;
    default:
        console.log(`On ${day}  you also learn something.`);
}


/*------------------------------*/
/*-----TERNARY OPERATOR-----*/
/*------------------------------*/

const ageCarlos=35;
const drink= ageCarlos >= 18 ? 'you are an adult' : 'drink water' ;
console.log(`Ternary: ${drink}`);

