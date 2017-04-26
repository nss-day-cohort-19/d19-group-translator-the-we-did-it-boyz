var pigLatin= (function(Translator){
var pigLatinWords = [["merry","errymay"], ["christmas","hristmascay"], ["and","ndaay"], ["happy","appyhay"], ["new","ewnay"], ["year","earyay"]];


		Translator.translatePigLatin= function (message) {
			var newMessage=[];
			for(word in message) {
				for (var i = 0; i < pigLatinWords.length; i++) {
					console.log(message[word], pigLatinWords[i][1]);
					if(pigLatinWords[i][0] == message[word]) {
						newMessage.push(pigLatinWords[i][1]);
						console.log(word);
						break;
					}
				}
			}
			console.log(newMessage);
			var message2 = newMessage.reduce(function(a, b) {

				return a + " " + b;
			});
			return message2;
		}

})(Translator);


