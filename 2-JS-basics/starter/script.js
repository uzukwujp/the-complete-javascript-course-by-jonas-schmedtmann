/*
* Data Types and Varaibles
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 20; 
// var fullAge = true;

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job)



/*************************
* Variable mutation and type coercion
*/;

// var firstName = 'John';
// var age = 28;

// //Type Coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Variable mutation
// age = 'twenty eight';
// job = 'driver';

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);



/**************************
* Basic Operatprs
*/

// var now = 2018;
// var ageJohn = 28;
// var ageMark = 40


// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operator
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeOf Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Test');

/**************************
* Operators Precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;


// //Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average)

// //Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// //More Operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x = x + 1;
// x += 1;
// x++;
// console.log(x);



/**************************
* CODING CHALLENGE 1
*/

// var markMass = 90;
// var markHeight = 1.8;

// var johnMass = 80;
// var johnHeight = 1.7;

// var markBMI = markMass / (markHeight*2);
// console.log("Marks BMI" + markBMI);

// var johnBMI = johnMass / (johnHeight*2);
// console.log("Johns BMI" + johnBMI);

// var isMarkHigher = markBMI > johnBMI;

// console.log("Is Marks BMI higher than Johns - " + isMarkHigher);


/**************************
* IF/ELSE 
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;

// if(isMarried){
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }




/**************************
* Boolean Logic
*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man');
// }


/**************************
* Ternary operators and switch
*/

// var firstName = 'John';
// var age = 17;

// age >= 18 ? console.log(firstName + ' can drink beer') :  console.log(firstName + ' can drink juice');

// var drink = age >= 18 ? 'Beer' : 'Juice';
// console.log(drink);

// //Switch
// var job = 'instructor';

// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code')
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in lisbon');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }  




/**************************
* Truthy and Falsy values and equality operators
*/

// Falsy values: undefinded, null, 0, '', NaN
// Truthy values: Not falsy values

// var height;

// height = 23;

// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined');
// }

// //Equality Operators
// if (height === 23) {
//     console.log(' === - The data types HAVE TO be the same.')
// } else if (height == '23') {
//     console.log('== - The data types DO NOT have to be the same.')
// }





/**************************
* CODING CHALLENGE 2
*/

// var teamJohn = 89 + 120 + 103;
// var teamMike = 116 + 94 + 102;
// var teamMary = 116 + 94 + 102;

// console.log('----- Total Scores -----');

// console.log('Team John: ' + teamJohn);
// console.log('Team Mike: ' + teamMike);
// console.log('Team Mary: ' + teamMary);

// //1. Average scores

// var teamJohnAverage = (teamJohn) / 3;
// var teamMikeAverage = (teamMike) / 3;
// var teamMaryAverage = (teamMary) / 3;

// console.log('----- Average Scores -----');

// console.log('Team John: ' + teamJohnAverage);
// console.log('Team Mike: ' + teamMikeAverage);
// console.log('Team Mary: ' + teamMaryAverage);


// console.log('----- Winner -----');


// if((teamJohnAverage > teamMikeAverage) && (teamJohnAverage > teamMaryAverage)){
//     console.log('Johns team wins with an average of: ' + teamJohnAverage);
// } else if((teamMikeAverage > teamJohnAverage) && (teamMikeAverage > teamMaryAverage)) {
//     console.log('Mikes team wins with an average of: ' + teamMikeAverage);
// } else if((teamMaryAverage > teamJohnAverage) && (teamMaryAverage > teamMikeAverage)) {
//     console.log('Marys team wins with an average of: ' + teamMaryAverage);
// } else if((teamMaryAverage === teamJohnAverage) && (teamMaryAverage === teamMikeAverage) && (teamMikeAverage === teamJohnAverage)){
//     console.log('The match has ended in a draw: ' + 'Team Mike ' + teamMikeAverage + ' - Team John ' + teamJohnAverage + ' - Team Mary ' + teamMaryAverage);
// }




/**************************
* Functions
*/

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1949);
// var ageSteven = calculateAge(1980);
// console.log(ageJohn, ageSteven);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1980, 'Mary');
// yearsUntilRetirement(1950, 'Steven');

/**************************
* Function Expressions
*/

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

