// Task:
// Currently, whenever we click an animal, our event listener will grab a
// random fact. But we also want to display this fact on the page.

// First, in `animalFacts` let's create a `<p>` element below `images`. We'll
// give it an`id` attribute and set its value to 'fact'. This is where we'll
// place the fact we grab with our `displayFact` event listener.

// On the line after `funFact` in the event listener, place this line:
// document.getElementById('fact').innerHTML = funFact;

// This will place the fact inside of the`<p>` element we just created.

// Finally, Add an `onClick` attribute to each `<image />` in the *for...each*
// statement. Set its value to the function we just created.

// Now run the code and click on an animal.We should see a fact pop up on the
// screen!



// Hint:
// Below `funFact` in the `displayFact` function:
    // document.getElementById('fact').innerHTML = funFact;

// In the `<img/>` element in the *for...each* statement:
    // onClick = { displayFact }

// Underneath `{background}` in `animalFacts`:
    // <p id='fact'></p>



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
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {background}
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