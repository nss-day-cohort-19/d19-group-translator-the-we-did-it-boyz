var Translator = (function(){
	var words = [["merry", "alegre"], ["christmas", "navidad"], ["and", "y"], ["happy", "feliz"], ["new", "nuevo"], ["year", "ano"]];

	return {
		translateSpanish: function (message) {
			var newMessage=[""];
			for(word in message) {
				for (var i = 0; i < words.length; i++) {
					if(words[i][0] == message[word]) {
						newMessage.push(words[i][1]);
						break;
					}
				}
			}
			newMessage = newMessage.reduce(function(a, b) {
				return a + " " + b;
			});
			return newMessage;
		}
	}
})();