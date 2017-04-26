var Translator = (function(){
	var spanishWords = {"merry": "alegre", "christmas": "navidad", "and": "y", "happy": "feliz", "new":"nuevo", "year": "ano"};

	return {
		translateSpanish: function (message) {
			var newMessage=[""];
			for(word in message) {
				var translated = false;
				for(var key in spanishWords) {
					if(key == message[word]) {
						newMessage.push(spanishWords[key]);
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
	}
})();