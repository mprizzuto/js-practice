console.clear();

console.clear();

(function isAnagram(wordOne, wordTwo) {
  wordOne = prompt("type a word");

    // check for invalid characters
  let format = /[`~!@#$%^&*()_+{}|? ]+/;
    
  if ( /\d/.test( wordOne ) === true ) {
    alert("no nums allowe");
  } else if ( format.test( wordOne ) === true ) {
      alert("no foreign chars allowed");
  } else if (wordOne === null) {
    alert("required");
  } else {
      var wordOneSplit = wordOne.split("");
      wordTwo = prompt("type another word");
      if (wordTwo === null) {
      alert("required");
      }
      if ( /\d/.test( wordTwo ) === true ) {
        alert("no nums allowe");
      } else if ( format.test( wordOne ) === true ) {
        alert("no foreign chars allowed");
      } else {
        if (wordOne.length !== wordTwo.length) {
          alert("words must be same length");
        } else if ( /\d/.test( wordTwo ) === true) {
        alert("no numbers");
        }
        else {
          var wordTwoSplit = wordTwo.split("");
          function findCommonElements3(arr1, arr2) {
            return arr1.some(item => arr2.includes(item));
        }
        let result = findCommonElements3(wordOneSplit, wordTwoSplit) ? "words are anagrams" : "not anagrams";
        alert(`word one is ${wordOne} word two is ${wordTwo} ${result}`);
    }
  }  
}

}) ();

function validateInput() {
  // test
}
