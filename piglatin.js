
var Translator = (function(Translator){
var pigLatinWords = {"merry":"Errymay", "christmas":"Hristmascay", "and":"ndaay", "happy":"Appyhay", "new":"ewnay", "year":"earyay"};

		Translator.translatePigLatin= function (message) {
			var newMessage=[""];
			for(word in message) {
				var translated = false;
				for(var key in pigLatinWords) {
					if(key == message[word]) {
						newMessage.push(pigLatinWords[key]);
						translated = true;
						break;
					}
				}
				if(!translated) {
					newMessage.push(message[word]);
				}
			}
			newMessage = newMessage.reduce(function(a, b) {
				return a + " " + b;
			});
			return newMessage;
		}
		return Translator;
}(Translator || {}));
