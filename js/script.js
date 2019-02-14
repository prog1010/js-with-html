function onButtonClicked() {
  console.log("the button was clicked");
}

window.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("#btn");
  button.addEventListener("click", onButtonClicked);
});