// Task:
// Let's create another variable to hold the value of the title. Above
// `animalFacts`, create a `title` constant. Set its value to the title that's
// currently between the `<h1></h1>` tags.

// Next, replace the words between the `<h1></h1>` tags with the `title`
// variable.



// Hint:
// const title = "Click an animal for a fun fact!";

// const animalFacts = <h1>{title}</h1>



// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';

const title = "Click an animal for a fun fact!";

const animalFacts = <h1>{title}</h1>


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);
