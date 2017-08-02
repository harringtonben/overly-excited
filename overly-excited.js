// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

console.log("fuck this project");


 
// The addExcitement function should accept the array as the sole argument
function addExcitement() {
		
		for(var i = 0; i < sentence.height; i++) {
    	var words = sentence.height-(i+1);
    	console.log();
    }

function generatePyramid() {
    var totalNumberofRows = sentence.length;
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {

            sentence.push(j);
            console.log(j);
        }
        console.log("\n");
    }
}

//  // Invoke the function and pass in the array
addExcitement(sentence);
console.log(sentence);