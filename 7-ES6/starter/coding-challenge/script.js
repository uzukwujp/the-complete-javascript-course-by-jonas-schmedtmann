/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element {
    
    constructor(name, buildYear) 
    {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element
{
    constructor(name, buildYear, numberOfTrees, parkArea)
    {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    density() 
    {
        console.log(`The density of ${this.name} park is ${this.numberOfTrees / this.parkArea}`);
    }

    averageAge(...years)
    {
        let ages = years.map(el => 2019 - el);

        let sumTotal = ages.reduce((accumulator, currentValue) => accumulator + currentValue)
        let average = (sumTotal / ages.length);

        console.log(`The total age of all the parks is ${sumTotal}.`)
        console.log(`The average age of a park is ${average}.`)
    }

    moreThan1000Trees() 
    {
        if(this.numberOfTrees > 1000) 
        {
            console.log(`${this.name} has more than 1000 trees`);
        }
    }
}

class Street extends Element
{
    constructor(name, buildYear, streetLength)
    {
        super(name, buildYear);
        this.streetLength = streetLength;
    }

    totalLength(...streetsLength) 
    {
        let sumTotal = streetsLength.reduce((accumulator, currentValue) => accumulator + currentValue)
        let average = (sumTotal / streetsLength.length);
        console.log(`The total length of all the streets is ${sumTotal}M.`)
        console.log(`The average length of a streets is ${average}M.`)
    }

    sizeClasification()
    {
        switch(this.streetLength) {
            case (this.streetLength <= 100):
                console.log(`${this.name} is tiny`)
                break;
            case (this.streetLength > 100 && this.streetLength <= 200):
                console.log(`${this.name} is small`)
                break;
            case (this.streetLength > 200 && this.streetLength <= 500):
                console.log(`${this.name} is normal`)
                break;
            case (this.streetLength > 500 && this.streetLength <= 750):
                console.log(`${this.name} is big`)
                break;
            default:
                console.log(`${this.name} is huge`)
        }
    }
}

let park = new Park();
let park1 = new Park('Baldoyle', 1970, 250, 15600)
let park2 = new Park('Sutton', 1990, 856, 10003)
let park3 = new Park('Howth', 1990, 1230, 18000)
const parks = [park1, park2, park3];

let street = new Street();
let street1 = new Street('Baldoyle Street', 1950, 100);
let street2 = new Street('Howth Street', 1960, 200);
let street3 = new Street('Sutton Street', 1970, 300);
let street4 = new Street('Malahide Street', 1980, 400);

const streets = [street1, street2, street3, street4];


function parkReport()
{
    console.log(`------ Park Report 2019 -----`);
    console.log(`-----------------------------`);

    console.log(`-------- Tree Density -------`);
    parks.map(park => park.density());
    
    console.log(`-------- Average Age -------`);
    park.averageAge(park1.buildYear, park2.buildYear, park3.buildYear);

    console.log(`---- More than 1000 trees ---`);
    parks.map(park => park.moreThan1000Trees());
}

function streetReport()
{
    console.log('');
    console.log(`------ Street Report 2019 -----`);
    console.log(`-------------------------------`);

    console.log(`-------- Street Length --------`);
    street.totalLength(street1.streetLength, street2.streetLength, street3.streetLength, street4.streetLength);

    console.log(`---- Size Classification ---`);
    streets.map(street => street.sizeClasification());

}

parkReport();
streetReport();

// let ages = years.map(el => 2019 - el);
