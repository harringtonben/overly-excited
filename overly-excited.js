// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var sentenceContainer = [];
// The addExcitement function should accept the array as the sole argument
function addExcitement(sentence) {
    // debugger;
    var totalNumberofRows = sentence.length,
        arr;
    for (var i = 0; i < totalNumberofRows; i++) {
        arr = [];
        for (var j = 0; j <= i; j++) {
            arr.push(sentence[j]); 
    }
        console.log(arr.join(" ") + "\n");
    }
}

// Invoke the function and pass in the array

addExcitement(sentence);

