console.clear();

(function isAnagram(wordOne, wordTwo) {
    // check for invalid characters
   let format = /[`~!@#$%^&*()_+{}|? ]+/;
  // check for numbers
  wordOne = prompt("type a word");
    
  if ( /\d/.test( wordOne ) === true ) {
    alert("no nums allowe");
  } else if ( format.test( wordOne ) === true ) {
      alert("no foreign chars allowed");
  }
  else {
    wordTwo = prompt("type another word");
    if ( /\d/.test( wordOne ) === true ) {
      alert("no nums allowe");
  } else if ( format.test( wordOne ) === true ) {
      alert("no foreign chars allowed");
  }
  else {
     
    if (wordOne.length !== wordTwo.length) {
      alert("words must be same length");
    } else {
      alert(`word one is ${wordOne} word two is ${wordTwo}`);
    }
  }  
}
 
}) ();