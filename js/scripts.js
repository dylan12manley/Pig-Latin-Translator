$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var language = $("input#")
    var result = pigLatin(language)
  });
});
