// Task:
// Since we're planning on adding more to our JSX expression, it's going to
// become significantly larger. It would end up looking messy if we left it
// in the ReactDOM.render()` method. Instead, let's pull it out and set it as
// the value of some variable.

// Somewhere between the import statements and the render method, declare a 
// `animalFacts` constant, and set it's value to JSX expression that is
// currently in the render method.

// Then, replace the JSX expression in the render method with the variable we 
// just declared.


// Hint:
// const animalFacts = <h1>"Click an animal for a fun fact!"</h1>

// ReactDOM.render(
//     animalFacts,
//     document.getElementById('root')
// );


// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';

const animalFacts = <h1>"Click an animal for a fun fact!"</h1>

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);
