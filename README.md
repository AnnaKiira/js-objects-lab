![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Objects

A lab for you to practice working with objects.

For each of these examples we'll provide the expected property keys and their type below. It's up to you to add the values!

### Montage

Create a `montage` object to psyche yourself up. It should have the following properties:
- `gameFace` (String Emoji)
- `readyForThis` (Boolean)
- `victorySound` (String)

Give this object whatever values you see fit 😇 😈.

When you're done, `console.log` your object, and your object's `victorySound`. 


### Hometown

Create a `hometown` object to describe your local village/town/city, which has the following properties:
- `name` (String)
- `population` (Number)
- `country` (Object)

The country object inside should also have a name and population!

Now:
- `console.log` the name of your hometown and it's population. 
- Then `console.log` just your hometown's country name 
- and finally the country's population.


### Movie Characters

Create an array of three of your favourite movie `characters`. Each character should be an object with the following properties:

- `name` (String)
- `movie` (String)

Now:
- `console.log` out the name of the first character in your array.
- For each of the characters in your array, `console.log` their name and their movie e.g. `'I am Mufasa from The Lion King.'` 



### Friendly Monkey

Create a monkey object, which has the following properties:
- `name` (String)
- `species` (String)
- `foodsEaten` (Array)


And the following methods:
- `eatSomething(food)` which adds a new item into the monkey's foodsEaten array.
- `introduce()`: returns a string introducing itself, including its name, species, and the last thing it ate. 


Exercise your monkey by retrieving its properties and 
using its methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).



### Frankenstein's Monster

Here is a laboratory:

```
const laboratory = {
   monster: {}, // an object that lives in the lab
   experiment(partName, partValue) {
  
   }
}
```

Firstly, type this code out. No copy pasting allowed 😀

Your job is to write some code inside the body of the `experiment` method, to add a new part to your monster, given a `partName` and `partValue`.

For example, let's say your call the `experiment` method with the following part names and values:

```
laboratory.experiment('tentacles', 'very slimy parts');
laboratory.experiment('eyeCount', 13);
laboratory.experiment('hair', { colour: 'Red', density: 10 });
```

If you were to now `console.log(laboratory.monster)`, your monster would look like this:

```
{
  tentacles: 'very slimy parts',
  eyeCount: 13,
  hair: { 
    colour: 'Red', 
    density: 10 
  }
}
```

The `experiment` should work for any `partName` and `partValue` you give it.