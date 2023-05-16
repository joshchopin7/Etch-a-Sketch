

const container = document.querySelector('#container'); //This selects 'container' div
let squares = {}; // let 'squares' be an empty object



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


// make a row of 16 squares
makeSquares(50);




