//back end//
function toPigLatin(sentence){
  var sentenceArray = sentence.split(" ");
  var pigSentenceArray = sentenceArray.map(function(word){
    return latinizer(word);
  })
}


  console.log(vowels)

//front end//
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    $("input#language").show();
    var userSentence = $("input#language").val();
    var pigLatinSentence = toPigLatin(userSentence);
    console.log("input#language");
    $("#result").text(pigLatinSentence);
  });
});

//back end//
// var vowels = ["a" , "e" , "i" , "o" , "u" , "A" , "E" , "I" , "O" , "U"];

// var pigSentence = function(input) {
//   var sentence = input.split(" ");
//   newSentence = sentence.map(function(word){
//     return pigWord(word);
//   });
//   return newSentence.join(" ");
// };
//
// var pigWord = function(word){
//   if (word[0] === "y" || word[0] === "Y") {
//     return word.slice(1) + "yay";
//   }
//   else if (word[]){
//
//   }
//   else {
//   return (pigWord("error"))}
// }
