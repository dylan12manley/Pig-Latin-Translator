//back end//
var vowels = ["a" , "e" , "i" , "o" , "u"];
// var consonants = ["b" , "c" , "d" , "f" , "g" , "h" , "j" , "k" , "l" , "m" , "n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z" , "qu"];
var pigLatin = function(input) {
  var sentence = input.split(" ");
  console.log(sentence)
  // sentence.forEach(function(word){
  //   word
  }


  console.log(vowels)

//front end//
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var language = $("input#language");
    var result = pigLatin(language);
    console.log("input#language");
    $("#result").show();
  });
});
