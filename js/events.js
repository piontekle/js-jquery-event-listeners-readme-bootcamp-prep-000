//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
$('p').on("click", function() {
alert("Hey!");  
});
}

function frameIt() {
    $('img').on("load", function() {
    img.class = tasty;
  });
}

function pressIt() {
  $(document).on("keydown", function() {
    if (key.which == 71) {
      alert("You da real oG.");
    }
  });
}

function submitIt() {
  $('form').on("submit", function () {
    alert("Your form is going to be submitted now.")
  });
}

});
