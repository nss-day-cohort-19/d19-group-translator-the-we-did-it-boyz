var pigLatin = (function(Translator){
var pigLatinWords = {"Merry":"Errymay", "Christmas":"Hristmascay", "and":"ndaay", "Happy":"Appyhay", "New":"ewnay", "Year":"earyay"};

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
})(Translator);
