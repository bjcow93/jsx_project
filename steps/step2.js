// Task:
// Now, on line 5, let's write our ReactDOM.render statement. Let's pass 
// <h1>Click an animal for a fun fact!</h1> as the JSX expression that we want
// to be compiled and rendered. Click on index.js to found out what we should
// pass to document.getElementById()

// When finished, click run. If all goes well, we should see the text 'Click an
// animal for a fun fact!' appear on the screen!


// Hint:
// ReactDOM.render(
//     <h1>Click an animal for a fun fact!</h1>,
//     document.getElementById('root')
// );


// Solution code:
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    <h1>Click an animal for a fun fact!</h1>,
    document.getElementById('root')
);
