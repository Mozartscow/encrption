console.log("STARTERINO LOGERINO");

//when type in the inputText field this function is run for every character
function trackChange(value) {
  // log the value to console
  console.log("input: " + value);

  // process the string, encrypt or whatever.
  var processedString = encryptMyText(value);

  // set outputText value to the html entity
  document.getElementById('outputText').value = processedString;
}

function encryptMyText(string) {
  // add " LOL" to the string
  string = string + " LOL";

  // return modified string.
  return string;
}
