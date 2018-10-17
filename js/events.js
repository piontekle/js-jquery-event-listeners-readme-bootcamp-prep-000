//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
$('p').on("click", function(e) {
alert("Hey!");  
});
}

function frameIt() {
    $('img').on("load", function(e) {
    img.class = tasty;
  });
}

function pressIt() {
  $(document).on("keydown", function(key) {
    if (key.which === 71) {
      alert("You da real oG.");
    }
  });
}

function submitIt() {
  $('form').on("submit", function(e) {
    alert("Your form is going to be submitted now.")
  });
}

});
