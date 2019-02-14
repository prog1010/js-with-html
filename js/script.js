console.log("Script is loading");
console.log(document.getElementById('btn'));

function onButtonClicked() {
  var input = document.querySelector('#textinput');
  var textarea = document.querySelector('textarea');
  textarea.value = textarea.value + " " + input.value;
  input.value = '';
}


function onContentLoaded() {
	console.log("DOM is loaded");
	var button = document.querySelector("#btn");
	button.addEventListener("click", onButtonClicked);
}

window.addEventListener("DOMContentLoaded", onContentLoaded);