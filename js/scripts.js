

$(function(){
  $("#string").submit(function(event) {
  event.preventDefault();
  var letters = $("input#letterString").val().split("");
  letters.forEach(function(letter, i) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      letters[i] = "-";
    }
  });
  $("ul#stringOutput").append("<li>" + letters.join("") + "</li>");

  console.log("This logs letters array", letters);
  });
});
