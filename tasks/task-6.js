// Task:
// Now let's add a background!
 
// Underneath `title`, create a constant named `background`, and set it's value
// to an `<image />` JSX element.

// Now let's give it some attributes!
//      * Give it a class of 'background'
//      * Let's use 'ocean' for `alt`. 
//      * Finally, use '/images/ocean.jpg' as the value of`src`.



// Hint:
// Underneath `title`:
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

const title = '';

const background = (
    <img
        className='background'
        alt='ocean'
        src='/images/ocean.jpg'
    />
);

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
    </div>
);


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);

