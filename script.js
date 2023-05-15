

const container = document.querySelector('#container'); //This selects 'container' div

let squares = {}; // let 'squares' be an empty object


// Create a function that makes divs, styles them into squares, and appends them to 'container'
function makeSquares(n) {
    for (i=0; i<n*n; i++) {
        let squares = document.createElement('div');
        squares.style.cssText = 'background-color: blue; width: 20px; height: 20px;';
        container.appendChild(squares);
        // below we style the container so that it changes size to perfectly fit squares:
        container.style.cssText += `width: ${n *22}px;`
        container.style.cssText += `height: ${n *22}px;`
    }
}

// make a row of 16 squares
makeSquares(16);


