// Task:
// We learned how to use *.map()* inside of a JSX expression to create a list of
// elements. In this task, we're going to use JavaScript's *for...in* statement
// to accomplish the same thing in order to insert images for each animal in
// `animals` into our JSX.

// Below the `animals` object, let's create a constant `images`, and set its
// value to an empty array. As we iterate through the entries in `animals`,
// we'll create an `<img />` element and push it to `images`.

// Let's begin the *for...in* statement with `for (each animal in animals) {}`.
// Inside of these curly braces, write the logic for pushing an `<img />`
// element to `images`.

// Let's give each `<img />` element some attributes. Use the key-value pairs
// in the following object as the attribute names and values:
    // {
    //     key: { animal },
    //     className: 'animal',
    //         alt: { animal },
    //     src: { animals[animal].image },
    //     aria - label: { animal },
    //     role: 'button',
    // }

// Finally, place the `images` constant inside of the
// `<div className='animals'></div>` element that we created in the last task.

// Click Run. We should see our animals!



// Hint:
// Below the `animals` object:
    // const images = [];
    // for (const animal in animals) {
    //     images.push(
    //         <img
    //             key={animal}
    //             className='animal'
    //             alt={animal}
    //             src={animals[animal].image}
    //             aria-label={animal}
    //             role='button'
    //         />
    //     )
    // };

// Underneath `{background}` in `animalsFacts`:
    // <div className='animals'>
    //      {images}
    // </div> */}



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

const images = [];
for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role='button'
        />
    )
};

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {background}
        <div className='animals'>
            {images}
        </div>
    </div>
);


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);