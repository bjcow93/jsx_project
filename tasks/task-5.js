// Task:
// Now let's add a background!


// Hint:
// const background = (
//     <img
//         className='background'
//         alt='ocean'
//         src='/images/ocean.jpg'
//     />
// );


// Solution code:
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

const animalFacts = <h1>{title}</h1>

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);