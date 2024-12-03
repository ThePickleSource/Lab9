function sendMessage() {
  alert('Jack Shimkus: ' + msg.value);
}

var alertButton = document.getElementById('entrybutton');
var msg = document.getElementById('entryinput');
var output = document.getElementById('textoutput');

alertButton.addEventListener('click', sendMessage);

alertButton.addEventListener('click', function () {
  output.innerHTML = msg.value;
});