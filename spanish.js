var Translator = (function(){
	var words = [["merry", "alegre"], ["christmas", "navidad"], ["and", "y"], ["happy", "feliz"], ["new", "nuevo"], ["year", "ano"]];

	return {
		translateSpanish: function (message) {
			var newMessage=[];
			for(word in message) {
				for (var i = 0; i < words.length; i++) {
					console.log(word, words[i]);
					if(words[i][0] == word) {
						newMessage.push(word[i][1]);
						console.log(word);
					}
				}
			}
			console.log(newMessage);
			var message2 = newMessage.reduce(function(a, b) {

				return a + " " + b;
			})
			return message2;
		}
	}
})();