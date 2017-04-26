var input = document.getElementById('input');
var output = document.getElementById('output');
let submitbtn = document.getElementById('translatebtn');
let spanbtn = document.getElementById('spanish');
let pigbtn = document.getElementById('piglatin');
let germbtn = document.getElementById('german');
let binbtn = document.getElementById('binary');

submitbtn.addEventListener("click", translate);

function translate(event) {
	var newString = input.value.toLowerCase();
	var messageArray = newString.split(" ");
	var translation;

	if(spanbtn.checked) {
		translation = Translator.translateSpanish(messageArray);
	} else if(pigbtn.checked) {
		translation = Translator.translatePigLatin(messageArray);
	} else if(germbtn.checked) {
		translation = Translator.translateGerman(messageArray);
	} else if(binbtn.checked) {
		translation = Translator.translateBinary(messageArray);
	} else {
		translation = "Select a language to translate to";
	}
	output.innerHTML = translation;
}