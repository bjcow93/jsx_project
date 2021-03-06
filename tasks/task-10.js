// Task:
// Now that we have our animals displaying on the screen, let's add an event
// listener that will randomly select a fact from the clicked animal's array of
// facts that we have stored in `animals`.

// Between `animals` and `images`, let's write a function and name it
// `displayFact`. We'll need to pass the event, which we'll call `e`, as an
// argument.

// `e.target.alt` will be used to grab the name of the animal that was clicked
// on. We can use this to key into our `animals` object and grab the animal's
// information. Let's declare a `selectedAnimal` constant, and set its value to
// `animals[e.target.alt]`

// On the next line, create an `optionIndex` constant. Use the following code
// as its value:
    // Math.floor(Math.random() * selectedAnimal.facts.length)
// This will allow us to randomly generate a number based on the length of the
// array of the selected animal's facts.

// Finally, underneath this, create a `funFact` constant. As its value, use the
// index we generate from `optionIndex` to grab a fact from the selected
// animal's `facts` key in `animals`.




// Hint:
// Above `images`:
    // function displayFact(e) {
    //     const selectedAnimal = animals[e.target.alt];
    //     const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
    //     const funFact = selectedAnimal.facts[optionIndex];
    // };




// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

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
        />
    )
};

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {background}
        <div className='animals'>
            {images}
        </div>
    </div>
);

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);