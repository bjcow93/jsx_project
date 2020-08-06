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

const images = [];
for (const animal in animals) {
  images.push(
  <img
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
  />
  )
};

function displayFact(e) {
  const selectedAnimal = animals[e.target.alt];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];

  document.getElementById('fact').innerHTML = funFact;
};

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
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


//toggle background extra credit maybe