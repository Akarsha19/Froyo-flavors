//Prompt the user to enter their flavors separated by a comma
//userInput to store
const userInput = prompt('Please enter your desired flavors using a comma between each one.')
//Make sure to split by commas 
const userInputArray = userInput.split(`,`);

//create empty object
const flavors = {};

//use loop to add flavors 
for (let i = 0; i < userInputArray.length; i++) {
  const desiredFlavor = userInputArray[i];
  if (!flavors[desiredFlavor]) {
    flavors[desiredFlavor] = 1;
  }
  else {
    flavors[desiredFlavor] += 1;
  }
  console.log(flavors);
}