// Function Constructor

var Person = function(name, yearOfBirth, job) 
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

/*
    1. New empty object is created.
    2. The function is called.
    3. 'this' points to the new empty object, not the global variables.
*/

var andre = new Person('Andre', 1996, 'Software Engineer');
var cathal = new Person('Cathal', 1997, 'Teacher');

andre.calculateAge();
cathal.calculateAge();

console.log(andre);
console.log(andre.lastName);