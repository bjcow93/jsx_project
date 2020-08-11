// Task:
// Now that we have verified that our title is showing up on screen, let’s add
// a little more logic to it. Let’s rewrite the code so that we have the option
// of inputting our own title.

// In `animalFacts`, where we currently have `title` in the header element,
// write a ternary operator that checks to see if the value of `title` is an
// empty string. If it is, have it use ‘Click an animal for a fun fact!’ as the
// header. If not, have it use `title`.

// Now, add your own custom title as the value of `title`, click Run, and see
// if it shows up on the screen! Do the same with an empty string as the value.



// Hint:
// Title should now look like this:
    // const title = '';

// The `<h1>` element inside of `animalFacts` should now look like this:
    // <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>



// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const animalFacts = <h1>{title === '' ? 'Click an animal for a fun fact! :' : title}</h1>


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);