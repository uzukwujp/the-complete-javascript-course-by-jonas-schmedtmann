// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age = 23;
// name6 = 'Jane Miller'; // This results in a type error. You can't reassign a constant.
// console.log(name6);

// // ES5
// function driversLicence5(passedTest) {
    
//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
    
    
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence5(true);

// // ES6
// function driversLicence6(passedTest) {
    
//     //console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;
    
//     if (passedTest) {
//         firstName = 'John';
//     }
    
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence6(true);

// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);






// Lecture: Blocks and IIFEs

// ES6

{
    const a = 1;
    let b = 2;
}

console.log(a + b); //Fails. Variables can't be acessed out of the block.

//ES5

(function() {
    var c = 3;
})();

console.log(c);


