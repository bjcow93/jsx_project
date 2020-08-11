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
    dolphin: '/images/dolphin.png',
    lobster: '/images/lobster.png',
    starfish: '/images/starfish.png',
};

const images = [];
for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal]}
            aria-label={animal}
            role='button'
        />
    )
};

const animalFacts = (
    <div>
        <h1>{title}</h1>
        {background}
        <div className='animals'>
            {images}
        </div>
    </div>

ReactDOM.render(
        animalFacts,
        document.getElementById('root')