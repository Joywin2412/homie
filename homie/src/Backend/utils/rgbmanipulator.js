// let userInput = prompt("Enter an RGB color value (e.g., 'rgb(255, 128, 0)'):");
let userInput="rgb(255,128,9)";
// Extracting RGB components from user input
const rgbmanipulator=(userInput)=>{
let rgbValues = userInput.match(/\d+/g);
const colors=[];
let red = parseInt(rgbValues[0]);
let green = parseInt(rgbValues[1]);
let blue = parseInt(rgbValues[2]);
while((red-blue)>50)
{
    red=red-50;
    let manipulatedColor = `rgb(${red}, ${green}, ${blue})`;
    colors.push(manipulatedColor);
}
 red = parseInt(rgbValues[0]);
 green = parseInt(rgbValues[1]);
 blue = parseInt(rgbValues[2]);
 while((blue-red)>50)
{
    red=red+50;
    let manipulatedColor = `rgb(${red}, ${green}, ${blue})`;
    colors.push(manipulatedColor);
}
return colors;
}
module.exports(rgbmanipulator);