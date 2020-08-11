// Task:
// Copy and paste the following code underneath our `background` constant:
    // const animals = {
    //     dolphin: {
    //         image: '/images/dolphin.png',
    //         facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    //     },
    //     lobster: {
    //         image: '/images/lobster.png',
    //         facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    //     },
    //     starfish: {
    //         image: '/images/starfish.png',
    //         facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    //     }
    // };

// We're going to use the information stored in this object for the animal
// pictures that we're going to add in the next task. 

// In `animalFacts`, underneath `{background}`, let's create a `<div>` element
// where we will eventually place our animal images. Give it a class named
// 'animals'.




// Hint:
// Underneath `background`:
    // const animals = {
    //     ...
    // }

// Underneath `{background}` in `animalFacts`:
    // < div className='animals'>
    // </div >



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

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {background}
        <div className='animals'>
        </div>
    </div>
);


ReactDOM.render(
        animalFacts,
        document.getElementById('root')
    );