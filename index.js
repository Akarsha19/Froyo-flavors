//Prompt the user to enter their flavors separated by a comma
//userInput to store
const userInput = prompt('Please enter your desired flavors using a comma between each one.')
//Make sure to split by commas 
const userInputArray = userInput.split(`,`);
console.log(userInputArray);

//create empty object
const flavors = {};

for (let i = 0; i < userInputArray.length; i++) {

}