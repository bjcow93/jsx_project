// Task:


// Hint:
// const animalFacts = (
//     <div>
//         <h1>{title}</h1>
//         {background}
//     </div>
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

const animalFacts = (
    <div>
        <h1>{title}</h1>
        {background}
    </div>
);

ReactDOM.render(
        animalFacts,
        document.getElementById('root')
    );

