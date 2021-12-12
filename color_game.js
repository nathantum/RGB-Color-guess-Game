/*
Steps 1:
1. Fade out incorrect div when clicked.
3. Set message board background color to white.
2. Add the entry again/correct when clicked.
3. Create function to set all the squares to correct color.
*/

/*
 Steps 2
 1. Generate random colors for array
    1a. generateRandomColor function
    1b. generateRandomColors function (calls 1a)
2. Change the title background to the corect color
*/

// function to pick a random number
// helper functions

const pickColor = () => {
    // Get randon number between 0 and 5 inclusive
    // Return  colors[randomNumber]
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

 // generate random color
const generateRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b}`);
}

// generate random colors depending on the mode picked
const generateRandomColors = (num) => {
    // make an array
    // add num random colors to array
    // return array of colors
}
const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)"
];

// select elements
const squares = document.querySelectorAll(".square");
const displayColor = document.getElementById("displayColor");
const message = document.getElementById("message");



// set winning color
let pickedColor = pickColor();

// update color display
displayColor.textContent = pickedColor;


// set the background colors
for (let i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];

    // add event listeners
    squares[i].addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;
        // console.log(clickedColor);

        if(clickedColor === pickedColor){
            message.textContent = "correct!";
            changeColors(pickedColor);
        }
        else {
            this.style.backgroundColor= "black";
            message.textContent = "Wrong!!"
        }
    });

}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}
