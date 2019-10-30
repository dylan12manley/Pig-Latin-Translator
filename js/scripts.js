//back end//
var vowels = ["a" , "e" , "i" , "o" , "u" , "A" , "E" , "I" , "O" , "U"];

var pigSentence = function(input) {
  var sentence = input.split(" ");
  // console.log(sentence)
  newSentence = sentence.map(function(word){
    return pigWord(word);
  });
  return newSentence.join(" ");

};

var pigWord = function(word){
  if (word[0] === "y" || word[0] === "Y") {
    return word.slice1

  }
  else {
  return (pigWord("error"))}
}


  console.log(vowels)

//front end//
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var language = $("input#language").val();
    var result = pigSentence(language);
    console.log("input#language");
    $("#result").show();
  });
});
