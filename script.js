

const container = document.querySelector('#container'); //This selects 'container' div
 // let 'squares' be an empty object



// Create a function that makes divs, styles them into squares, and appends them to 'container'
function makeSquares(n) {
    for (i=0; i<n*n; i++) {
        let squares = document.createElement('div');
        // design squares, give them an id, and add an Event Listener
        squares.style.cssText = `background-color: white; width: ${500/n}px; height: ${500/n}px;`;
        squares.setAttribute('id', 'squares');
        squares.addEventListener('mouseover', mouseOver)
        container.appendChild(squares);
        // here we define the function of mouseOver()
        function mouseOver() {
            squares.style.cssText = `background-color: black;  width: ${500/n}px; height: ${500/n}px;`;
          }
        // below we style the container so that it changes size to perfectly fit squares:
        container.style.cssText += `width: 500px;`
        container.style.cssText += `height: 500px;`
    }
}

makeSquares(16);


const squares = document.querySelector('#squares')


// create variable names for three buttons
const smallBtn = document.querySelector('#small');
const mediumBtn = document.querySelector('#medium');
const bigBtn = document.querySelector('#big');

// create a function for each size button
function clickSmall() {
    while (container.firstChild){
    container.removeChild(container.lastChild);
    };
    makeSquares(48);
    //clear function////////////
    function clearAll() {
        while (container.firstChild){
        container.removeChild(container.lastChild);
        };
        makeSquares(48)
    }
    
    clearBtn.addEventListener('click', clearAll);
}

function clickMed() {
    while (container.firstChild){
    container.removeChild(container.lastChild);
    };
    makeSquares(32);
    //clear function//////////
    function clearAll() {
        while (container.firstChild){
        container.removeChild(container.lastChild);
        };
        makeSquares(32);
    }
    
    clearBtn.addEventListener('click', clearAll);
}

function clickBig() {
    while (container.firstChild){
    container.removeChild(container.lastChild);
    };
    makeSquares(16);
    // clear function //////////
    function clearAll() {
        while (container.firstChild){
        container.removeChild(container.lastChild);
        };
        makeSquares(16);
    }
    
    clearBtn.addEventListener('click', clearAll);
}

// add event listen for each button

smallBtn.addEventListener('click', clickSmall);
mediumBtn.addEventListener('click', clickMed);
bigBtn.addEventListener('click', clickBig);


// create variable for clear
const clearBtn = document.querySelector('#clear');

// This function works on load of the first makeSquares()

function clearAll() {
    while (container.firstChild){
    container.removeChild(container.lastChild);
    };
    makeSquares(16);
}

clearBtn.addEventListener('click', clearAll);

// I also placed a clear function inside each size button function so that the sizing remains the same /////////////////////////////////////
