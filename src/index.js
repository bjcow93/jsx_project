import React from 'react';
import ReactDOM from 'react-dom';

const title = <h1>Click an animal for a fun fact!</h1>;
let background = '/images/ocean.jpg';

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


function displayFact(e) {
  const clicked = e.target.alt;
  const option = Math.random() < 0.5 ? 0 : 1;
  document.getElementById("fact").innerHTML = animals[clicked].facts[option];
}


const animalFacts = (
  <div>

    {title}
    <img className="ocean" alt="ocean" src={background ? background : '/images/ocean2.jpg'} />;


    <div className="animals">
      {Object.keys(animals).map((animal, idx) => (
        <img
          key={idx}
          className="animal"
          alt={animal}
          src={animals[animal].image}
          onClick={displayFact}
        />
      ))}
    </div>

    <div id="fact"></div>
  </div>
);


ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);