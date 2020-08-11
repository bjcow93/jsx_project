import React from 'react';
import ReactDOM from 'react-dom';

const title = "Click an animal for a fun fact!";

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
        fact: 'Dolphins have been shown to give distinct names to each other!'
    },
    lobster: {
        image: '/images/lobster.png',
        fact: 'Lobsters taste with their legs!'
    },
    starfish: {
        image: '/images/starfish.png',
        fact: 'Starfish can have up to 40 arms!'
    }
};

function displayFact(e) {
    const selectedAnimal = animals[e.target.alt];
    const funFact = selectedAnimal.fact;

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
        <h1>{title}</h1>
        {background}
        <p id='fact'></p>
        <div className='animals'>
            {images}
        </div>
    </div>

ReactDOM.render(
        animalFacts,
        document.getElementById('root')