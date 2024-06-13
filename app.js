/* Task 1. */
const montage = {
    gameFace: 'happy face',
    readyForThis: true,
    victorySound: 'woo',
};

console.log(montage)


/* Task 2 */
const hometown = {
    name: 'copenhagen',
    population: 600000,
    country: {name : 'denmark', population : 6000000},
};

console.log(hometown.name, hometown.population)
console.log(hometown.country.name)
console.log(hometown.country.population)

/* Now:

console.log the name of your hometown and it's population.
Then console.log just your hometown's country name
and finally the country's population.
 */
/* Task 3 */
const moviecharacters = [
    {
        name: 'ryan gosling',
        movie: 'the notebook',
    }, {
        name: 'shailene woodley',
        movie: 'adrift',
    }, {
        name: 'emma stone',
        movie: 'la la land',
    }
];

console.log(moviecharacters[0].name)

for (let i = 0; i < moviecharacters.length; i++){
        console.log(`I am ${moviecharacters[i].name} from the movie ${moviecharacters[i].movie}`)
    }

/* Task 4 */
    /* Friendly Monkey
    Create a monkey object, which has the following properties:
    
    name (String)
    species (String)
    foodsEaten (Array)
    And the following methods:
    
    eatSomething(food) which adds a new item into the monkey's foodsEaten array.
    introduce(): returns a string introducing itself, including its name, species, and the last thing it ate.
    Exercise your monkey by retrieving its properties and using its methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation). */

const monkey = {
    name: 'bob',
    species: 'gorilla',
    foodsEaten: ['banana', 'apple', 'carrot'],
    eatSomething(food) {
        monkey.foodsEaten.push(food)
    },
    introduce () {
        return  `I am ${monkey.name} my species is ${monkey.species} and the last thing I ate is ${monkey.foodsEaten[monkey.foodsEaten.length -1]}`;
    },
};

monkey.eatSomething('berry')
console.log(monkey.introduce())


/* Frankenstein's Monster
Here is a laboratory:

const laboratory = {
   monster: {}, // an object that lives in the lab
   experiment(partName, partValue) {
  
   }
}
Firstly, type this code out. No copy pasting allowed 😀

Your job is to write some code inside the body of the experiment method, to add a new part to your monster, given a partName and partValue.

For example, let's say your call the experiment method with the following part names and values:

laboratory.experiment('tentacles', 'very slimy parts');
laboratory.experiment('eyeCount', 13);
laboratory.experiment('hair', { colour: 'Red', density: 10 });
If you were to now console.log(laboratory.monster), your monster would look like this:

{
  tentacles: 'very slimy parts',
  eyeCount: 13,
  hair: { 
    colour: 'Red', 
    density: 10 
  }
}
The experiment should work for any partName and partValue you give it. */

const laboratory = { 
    monster: {},
    experiment(partName, partValue) {
        laboratory.monster[partName] = partValue;
    
    },

};

laboratory.experiment('ears', 'furry');
laboratory.experiment('eyeCount', 5);
laboratory.experiment('hair', { colour: 'rainbow', spikelevel: 100 });

console.log(laboratory.monster)