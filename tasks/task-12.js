// Task:
// Let's add one last feature to our awesome app! Let's add a `showBackground` 
// constant that will hold a Boolean value. If it's set to `true`, 
// the background will show. If it's set to false, the background will be blank.

// Above `background`, create a `showBackground` constant and set its value to
// `false`.

// In `animalFacts`, in place of where we currently have `{background}`, use 
// the `&&` operator that we learned about in the lesson to implement the 
// conditional.

// Toggle the value of `showBackground` between`true` and`false` and run the
// code to see if you got it working!

// BONUS:
// In addition to the AND `&&` operator, we can use the OR `||` operator. Given
// a list of variables or expressions, `||` will return the value of the first
// one whose boolean evaluates to `true`.

// Considering the boolean of an empty string is `false` can you think of a way
// to use`||` to replace the ternary operator in the header?



// Hint:
// Place this above `background`:
//      const showBackground = true;

// In `animalFacts`, replace `{background}` with this:
    // { showBackground && background }

// In the header:
    // <h1>{title || 'Click an animal for a fun fact!'}</h1>



// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const showBackground = true;
const background = (
    <img
        className='background'
        alt='ocean'
        src='/images/ocean.jpg'
    />
);

const animals = {
    dolphin: {
        image: '/images/dolphin.png',
        facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
        image: '/images/lobster.png',
        facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
        image: '/images/starfish.png',
        facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
};

function displayFact(e) {
    const selectedAnimal = animals[e.target.alt];
    const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
    const funFact = selectedAnimal.facts[optionIndex];

    document.getElementById('fact').innerHTML = funFact;
};

const images = [];
for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role='button'
            onClick={displayFact}
        />
    )
};

const animalFacts = (
    <div>
        <h1>{title || 'Click an animal for a fun fact!'}</h1>
        {showBackground && background}
        <p id='fact'></p>
        <div className='animals'>
            {images}
        </div>
    </div>
);

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);