var input = document.getElementById('input');
var output = document.getElementById('output');
let submitbtn = document.getElementById('translatebtn');
let spanbtn = document.getElementById('spanish');
let pigbtn = document.getElementById('piglatin');
let germbtn = document.getElementById('german');
let binbtn = document.getElementById('binary');
const shutbtn= document.getElementById('shutup');

submitbtn.addEventListener("click", translate);
shutbtn.addEventListener('click', function(){
	responsiveVoice.cancel();
});

function translate(event) {
	var newString = input.value.toLowerCase();
	var messageArray = newString.split(" ");
	var translation;
	var speech;

	if(spanbtn.checked) {
		translation = Translator.translateSpanish(messageArray);
		speech= responsiveVoice.speak(translation, "Korean Female");
	} else if(pigbtn.checked) {
		translation = Translator.translatePigLatin(messageArray);
		speech= responsiveVoice.speak(translation);
	} else if(germbtn.checked) {
		translation = Translator.translateGerman(messageArray);
		speech= responsiveVoice.speak(translation);
	} else if(binbtn.checked) {
		translation = Translator.translateBinary(messageArray);
		speech= responsiveVoice.speak(translation);

	} else {
		translation = "Select a language to translate to";
	}
	output.innerHTML = translation;
}