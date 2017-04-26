var german = (function(Translator){

	var germanwords = {"merry": "Frohe", "christmas": "Weihnachten", "and": "und", "a": "ein", "happy": "gutes", "new": "neues", "year": "Jahr"};

		Translator.translateGerman = function (message) {
			var newMessage=[""];
			for(word in message) {
				var translated = false;
				for(var key in germanwords) {
					if(key == message[word]) {
						newMessage.push(germanwords[key]);
						translated = true;
						break;
					}
				}
				if(!translated) {
					newMessage.push(message[word]);
				}
			}
			    newMessage = newMessage.reduce(function(a, b){
			  	return a + " " + b;
		})
			  	return newMessage;
	}

})(Translator);