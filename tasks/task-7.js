// Task:
// Before we add the new background variable to `animalFacts`, let's reformat
// the JSX stored in `animalFacts` to accommodate the growing expression.

// Our image is going to be placed outside of the `<h1>` element, so we're
// going to need to wrap the current header element inside of `<div></div>`
// tags. This will be our outermost element. In addition, the expression is
// going to be multiple lines, so we must now wrap it in parentheses.

// Format the code the way we learned in the lessons, with the appropriate
// indentations. Underneath the header tags, place our new `background`
// variable.

// Click Run. If everything is working as it should, we should see our
// background image showing up underneath the title!



// Hint:
    // const animalFacts = (
    //     <div>
    //         <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
    //         {background}
    //     </div>
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
        {background}
    </div>
);


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);