import React from 'react';
import ReactDOM from 'react-dom';

const title = "Click an animal for a fun fact!";
const background = '/images/ocean.jpg';

const animals = {
  dolphin: {
    image: '/images/dolphin.png',
    facts: ["Dolphins have been shown to give distinct names to each other!", "Dolphins are known to display their own culture!"]
  },
  lobster: {
    image: '/images/lobster.png',
    facts: ["Lobsters taste with their legs!", "Lobsters chew with their stomachs!"]
  },
  starfish: {
    image: '/images/starfish.png',
    facts: ["Starfish can have up to 40 arms!", "Starfish do not have any blood!"]
  }
};

const images = [];

for (const animal in animals) {
  images.push(
  <img
    key={animal}
    className="animal"
    alt={animal}
    src={animals[animal].image}
    onClick={displayFact}
  />)
}

function displayFact(e) {
  const clicked = e.target.alt;
  const option = Math.floor(Math.random() * animals[clicked].facts.length);
  document.getElementById("fact").innerHTML = animals[clicked].facts[option];
}


const animalFacts = (
  <div>

    <h1>{title}</h1>
    <img className="ocean" alt="ocean" src={background === "" ? '/images/ocean2.jpg' : background} />;
    {/* <img className="ocean" alt="ocean" src={background || '/images/ocean2.jpg'} />; */}

    <div className="animals">
      {images}
    </div>

    <div id="fact"></div>
  </div>
);


ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);