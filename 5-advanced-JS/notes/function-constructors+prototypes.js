// Function Constructors
/*
    Basically a class.
    Blueprint for an object.
    Saves repeating same object for different property eg dog.
*/

function Dog(name, color, size, breed) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.breed = breed;
}

const dog1 = new Dog('Nigel', 'Black/White', 'Medium', 'Collie');
const dog2 = new Dog('Bayleigh', 'Orange', 'Medium', 'Cross');

console.log(dog1, dog2);

// Prototypes

/* 
    A difference between functional constructors and rgaulr objects os that you can't add properties outside the function.
    For ecample om the dog object above we cant go Dog.sound = 'Woof';
    We have to create it within the function. Or add it to the prototype.
*/

function Person(name, yearBorn) {
    this.name = name;
    this.yearBorn = yearBorn;
}

const user1 = new Person('Andre', 1996);
const user2 = new Person('Elijah', 2000);

Person.prototype.calculateAge = function(){
    this.age = 2018 - this.yearBorn;
}

user1.calculateAge();
user2.calculateAge();

// Person.prototype.calculateAge = function(){
//     console.log(2018 - this.yearOfBirth);
// };

console.log(user1);
console.log(user2);

//Every person object which has access to prototype has a property called age in the ptype.
