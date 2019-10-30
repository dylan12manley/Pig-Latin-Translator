//back end//
var vowels = ["a" , "e" , "i" , "o" , "u"];
var consonants = ["b" , "c" , "d" , "f" , "g" , "h" , "j" , "k" , "l" , "m" , "n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z" , "qu"];
var pigLatin = function(language) {
  else {}
}

  console.log(consonants)

//front end//
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var language = $("input#language");
    var result = pigLatin(language);

    $("#result").show();
  });
});
