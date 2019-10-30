//back end//
function latinizer(word){
  var pigWord = word;
  if (/[^a-z]/i.test(word)) {
    return pigWord;
  }
  else if (word.length === 1){
    pigWord += "ay"
  console.log("one letter word");
  }
  else if ((word.charAt(0).toLowerCase() === "a") || (word.charAt(0).toLowerCase() === "e") || (word.charAt(0).toLowerCase() === "i") || (word.charAt(0).toLowerCase() === "o") ||
  (word.charAt(0).toLowerCase() === "u")) {
    pigWord += "way"
    console.log("word starts with vowel");
  }
  else if (!word.includes("qu")){
    var firstVowelIndex = vowelIndexer(word)
    var pigWord = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay"
    console.log("word starting with consonant");
  }
  else {
    var firstVowelIndex = vowelIndexer(word)
    var pigWord = word.slice(firstVowelIndex + 1) + word.slice(0, firstVowelIndex + 1) + "ay"
    console.log("word with qu");
  }
  return pigWord;
}

function vowelIndexer(string) {
  for (var i = 1; i < string.length; i++) {
    if ((string.charAt(i).toLowerCase() === "a") || (string.charAt(i).toLowerCase() === "e") || (string.charAt(i).toLowerCase() === "i") || (string.charAt(i).toLowerCase() === "o") ||
    (string.charAt(i).toLowerCase() === "u")){
      return i;
      console.log(vowelIndexer);
    }
  }
}


function toPigLatin(sentence){
  var sentenceArray = sentence.split(" ");
  var pigSentenceArray = sentenceArray.map(function(word){
    return latinizer(word);

  });
  var pigSentence = pigSentenceArray.join(" ");
  return pigSentence;
}


//front end//
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    $("input#language").show();
    var userSentence = $("input#language").val();
    var pigLatinSentence = toPigLatin(userSentence);
    console.log("input#language");
    $("#result").show();
    $("#translation").text(pigLatinSentence);
    event.preventDefault();
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
