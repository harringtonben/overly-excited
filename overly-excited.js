// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

 
// The addExcitement function should accept the array as the sole argument
function addExcitement(sentence) {
	for (var i = 0; i <= sentence.length; i++) {
        var runningSentence = sentence[i];
        runningSentence += sentence[i];
        console.log(runningSentence);
    }


// Invoke the function and pass in the array

addExcitement(sentence);
